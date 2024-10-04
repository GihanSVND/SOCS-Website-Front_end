export async function GET() {
    return new Response(JSON.stringify({ message: 'Public Data' }), { status: 200 });
}