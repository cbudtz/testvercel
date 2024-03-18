import prisma from '$lib/prisma';
export const GET = async () => {
	const count = await prisma.count.findUnique({
		where: {
			id: 0
		}
	});
	return {
		body: count
	};
};

export const POST = async ({ request }) => {
	const { count } = await request.json();
	console.log(count);
	await prisma.count.update({
		where: {
			id: 0
		},
		data: {
			count
		}
	});
	return new Response(JSON.stringify(count));
};
