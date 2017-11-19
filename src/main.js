import axios from 'axios';

const ajax = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'
});

ajax.get('posts/1')
	.then(response => {
		console.log(response);
	});