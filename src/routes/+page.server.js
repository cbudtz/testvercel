import prisma from '../lib/prisma';

export const load = async () => {
	const count = await prisma.count.findUnique({
		where: {
			id: 0
		}
	});
	return count;
};

export const actions = {
	saveCount: async ({ request }) => {
		const formData = await request.formData();
		const count = formData.get('count');
		await prisma.count.update({
			where: {
				id: 0
			},
			data: {
				count: parseInt(count)
			}
		});
	}
};
