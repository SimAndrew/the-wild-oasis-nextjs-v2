import { supabase } from './supabase';

export async function getCabin(id) {
	const { data, error } = await supabase
		.from('cabin')
		.select('*')
		.eq('id', id)
		.single();

	// For testing
	// await new Promise((res) => setTimeout(res, 1000));

	if (error) {
		console.error(error);
	}

	return data;
}

export async function getCabins() {
	const { data, error } = await supabase
		.from('cabin')
		.select('id, name, maxCapacity, regularPrice, discount, image')
		.order('name');

	if (error) {
		console.error(error);
		throw new Error('Cabins could not be loaded');
	}

	return data;
}
