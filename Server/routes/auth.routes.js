const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
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

      const { email, password, userName } = request.body

      const candidate = await User.findOne({ email })

      if (candidate) {
        return response
          .status(400)
          .json({ message: `User with email ${email} already exist` })
      }
      const hashPassword = await bcrypt.hash(password, 15)
      const user = new User({ email, password: hashPassword, userName })

      await user.save()

      return response.json({ message: 'User was created' })
    } catch (e) {
      console.log(e)
      response.send({ message: 'Server error' })
    }
  }
)

module.exports = router
