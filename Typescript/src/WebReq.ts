import axios, { type AxiosResponse } from 'axios';


interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


const fetchData = async () => {
    try {

        const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Data fetched successfully:', response.data);
    } catch (error:any) {
        if(axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }

}



//     {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

