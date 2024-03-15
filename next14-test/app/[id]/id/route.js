/**
 * @function
 * @param {Object} req 
 * @param {{id:}} param1 
 * @returns 
 * String
 * @description
 * path to hit /{id}/id
 */

export async function GET(req, { params }){
    console.log('req', req)
    console.log('params', params);
    return new Response(`GET Call for id ${params.id}`)
}