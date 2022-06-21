const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware/auth.middleware')
const fileService = require('../services/fileService')
const File = require('../models/File')
const router = new Router()
const { check, validationResult } = require('express-validator')

router.post(
  '/registration',
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 3').isLength({
      min: 3,
      max: 10,
    }),
  ],
  async (request, response) => {
    try {
      const errors = validationResult(request)

      if (errors.isEmpty()) {
        return response
          .status(400)
          .json({ message: 'Uncorresct request', errors })
      }

      const { userName, email, password } = request.body

      const candidate = await User.findOne({ email })

      if (candidate) {
        return response
          .status(400)
          .json({ message: `User with email ${email} already exist` })
      }
      const hashPassword = await bcrypt.hash(password, 8)
      const user = new User({ userName, email, password: hashPassword })

      await user.save()
      await fileService.createDir(new File({ user: user.id, name: '' }))
      return response.json({
        user: {
          id: user.id,
          email: user.email,
          userName: user.userName,
          diskSpace: user.diskSpace,
          userSpace: user.usedSpace,
          avatar: user.avatar,
        },
      })
    } catch (e) {
      response.send({ message: 'Server error' })
    }
  }
)

router.post(
  '/login',

  async (request, response) => {
    try {
      const { email, password, userName } = request.body
      const user = await User.findOne({ email })
      console.log(user)
      if (!user) {
        return response.status(404).json({ message: 'User not found' })
      }
      const isPassValid = bcrypt.compareSync(password, user.password)

      if (!isPassValid) {
        return response.status(404).json({ message: 'Invalid password' })
      }

      const token = jwt.sign({ id: user.id }, config.get('secretKey'), {
        expiresIn: '1h',
      })

      return response.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          userName: user.userName,
          diskSpace: user.diskSpace,
          userSpace: user.usedSpace,
          avatar: user.avatar,
        },
      })
    } catch (e) {
      console.log(e)
      response.send({ message: 'Incorrect' })
    }
  }
)
module.exports = router
