import { describe, it } from 'mocha';
import { assert } from 'chai';

const { notOk, ok } = assert;

import Ember from 'ember';
import {
  AjaxError,
  InvalidError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  BadRequestError,
  ServerError,
  TimeoutError,
  AbortError,
  ConflictError,
  isAjaxError,
  isUnauthorizedError,
  isForbiddenError,
  isNotFoundError,
  isInvalidError,
  isBadRequestError,
  isServerError,
  isSuccess,
  isTimeoutError,
  isAbortError,
  isConflictError
} from 'ember-ajax/errors';

const { Error: EmberError } = Ember;

describe('unit/errors-test - AjaxError', function() {
  it('AjaxError', function() {
    const error = new AjaxError();
    ok(error instanceof Error);
    ok(error instanceof EmberError);
  });

  it('InvalidError', function() {
    const error = new InvalidError();
    ok(error instanceof Error);
    ok(error instanceof InvalidError);
  });

  it('UnauthorizedError', function() {
    const error = new UnauthorizedError();
    ok(error instanceof Error);
    ok(error instanceof UnauthorizedError);
  });

  it('ForbiddenError', function() {
    const error = new ForbiddenError();
    ok(error instanceof Error);
    ok(error instanceof ForbiddenError);
  });

  it('NotFoundError', function() {
    const error = new NotFoundError();
    ok(error instanceof Error);
    ok(error instanceof NotFoundError);
  });

  it('BadRequestError', function() {
    const error = new BadRequestError();
    ok(error instanceof Error);
    ok(error instanceof BadRequestError);
  });

  it('ServerError', function() {
    const error = new ServerError();
    ok(error instanceof Error);
    ok(error instanceof ServerError);
  });

  it('TimeoutError', function() {
    const error = new TimeoutError();
    ok(error instanceof Error);
    ok(error instanceof TimeoutError);
  });

  it('AbortError', function() {
    const error = new AbortError();
    ok(error instanceof Error);
    ok(error instanceof AbortError);
  });

  it('ConflictError', function() {
    const error = new ConflictError();
    ok(error instanceof Error);
    ok(error instanceof ConflictError);
  });

  it('isUnauthorizedError: detects error code correctly', function() {
    ok(isUnauthorizedError(401));
  });

  it('isUnauthorizedError: detects error class correctly', function() {
    const error = new UnauthorizedError();
    ok(isUnauthorizedError(error));
  });

  it('isForbiddenError: detects error code correctly', function() {
    ok(isForbiddenError(403));
  });

  it('isForbiddenError: detects error class correctly', function() {
    const error = new ForbiddenError();
    ok(isForbiddenError(error));
  });

  it('isNotFoundError: detects error code correctly', function() {
    ok(isNotFoundError(404));
    notOk(isNotFoundError(400));
  });

  it('isNotFoundError: detects error class correctly', function() {
    const error = new NotFoundError();
    const otherError = new Error();
    ok(isNotFoundError(error));
    notOk(isNotFoundError(otherError));
  });

  it('isInvalidError: detects error code correctly', function() {
    ok(isInvalidError(422));
  });

  it('isInvalidError: detects error class correctly', function() {
    const error = new InvalidError();
    ok(isInvalidError(error));
  });

  it('isBadRequestError: detects error code correctly', function() {
    ok(isBadRequestError(400));
  });

  it('isBadRequestError: detects error class correctly', function() {
    const error = new BadRequestError();
    ok(isBadRequestError(error));
  });

  it('isServerError: detects error code correctly', function() {
    notOk(isServerError(499));
    ok(isServerError(500));
    ok(isServerError(599));
    notOk(isServerError(600));
  });

  it('isAjaxError: detects error class correctly', function() {
    const ajaxError = new AjaxError();
    const notAjaxError = new Error();
    const ajaxErrorSubtype = new BadRequestError();
    ok(isAjaxError(ajaxError));
    notOk(isAjaxError(notAjaxError));
    ok(isAjaxError(ajaxErrorSubtype));
  });

  it('isServerError: detects error class correctly', function() {
    const error = new ServerError();
    ok(isServerError(error));
  });

  it('isTimeoutError: detects error class correctly', function() {
    const error = new TimeoutError();
    ok(isTimeoutError(error));
  });

  it('isAbortError: detects error class correctly', function() {
    const error = new AbortError();
    ok(isAbortError(error));
  });

  it('isConflictError: detects error code correctly', function() {
    ok(isConflictError(409));
  });

  it('detects successful request correctly', function() {
    notOk(isSuccess(100));
    notOk(isSuccess(199));
    ok(isSuccess(200));
    ok(isSuccess(299));
    notOk(isSuccess(300));
    ok(isSuccess(304));
    notOk(isSuccess(400));
    notOk(isSuccess(500));
  });
});
