/* tslint:disable */
/* eslint-disable */
/**
 * HKN API
 * HKN API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';

/**
 *
 */
export class TeapotApi extends runtime.BaseAPI {
  /**
   * Get event
   */
  async teapotControllerGetEventRaw(): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/api/teapot/`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Get event
   */
  async teapotControllerGetEvent(): Promise<void> {
    await this.teapotControllerGetEventRaw();
  }
}
