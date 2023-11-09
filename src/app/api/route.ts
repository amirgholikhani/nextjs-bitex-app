import { DataType } from "@/app/List";

export async function GET(request: Request) {
    const data: DataType[] = [
        {
            id: 'apple',
            label: 'Apple'
        },
        {
            id: 'gillette',
            label: 'Gillette'
        },
        {
            id: 'mastercard',
            label: 'Mastercard'
        },
        {
            id: 'the-walt-disney-company',
            label: 'The Walt Disney Company'
        },
        {
            id: 'facebook',
            label: 'Facebook'
        },
        {
            id: 'louis-vuitton',
            label: 'Louis Vuitton'
        }
    ]

    return Response.json({ data })
}