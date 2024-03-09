export async function GET(req, { params }){
    console.log('req', req)
    console.log('params', params);
    return new Response(`GET Call for id ${params.id}`)
}