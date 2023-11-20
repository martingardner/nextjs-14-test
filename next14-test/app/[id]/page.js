export default function Page( { params }) {
        console.log('params', params);
    return (
        <section>
            <h2>{params.id} Page</h2>
        </section>
    )
}