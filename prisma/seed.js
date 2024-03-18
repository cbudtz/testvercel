import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.count.create({
		data: {
			id: 0,
			count: 10
		}
	});
}

main()
	.then(() => {
		console.log('seeded');
		prisma.$disconnect();
	})
	.catch((e) => {
		console.error(e);
		prisma.$disconnect();
	});
