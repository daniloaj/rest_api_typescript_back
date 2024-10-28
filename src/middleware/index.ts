import {Request, Response, NextFunction} from 'express'
import { validationResult } from 'express-validator'

export const InputErrors = (req, res, next: NextFunction) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    next()
}