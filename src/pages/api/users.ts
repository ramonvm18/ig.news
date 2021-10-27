import { NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: "Ramon"},
        {id: 2, name: "Teste"},
        {id: 3, name: "Teste2"},
    ]

    return response.json(users);
}