/* eslint-disable */

// DISABILITEI ESLINT AQUI PORQUE ELE FICA APITANDO PRA USAR REQUEST E TALS

import {
  ErrorRequestHandler, NextFunction, Request, Response
} from 'express';

const ErrorHandler = (error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction) => {
  console.log(error);
  response.sendStatus(500);
};

export default ErrorHandler;
