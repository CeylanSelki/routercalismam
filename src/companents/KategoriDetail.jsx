import { useParams } from "react-router-dom"

export default function KategoriDetail() {
    const { id } = useParams()
    return (
        <h2>Kategori {id}</h2>
    )
}