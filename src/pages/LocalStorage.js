import CategoryCard from "../components/CategoryCard"
import Input from "../components/Input"
import Gallery from "../assets/images/category-gallery.png"
import Video from "../assets/images/category-video.png"
import Music from "../assets/images/category-music.png"
import FileListCard from "../components/FileListCard"
import { useEffect } from "react"

const LocalStorage = (props) => {

    useEffect(() => {
        let localStorageHeadHeight = document.querySelector(".local-storage_head").getBoundingClientRect().height
        let localStorageSearchHeight = document.querySelector(".local-storage_search").getBoundingClientRect().height
        let localStorageCategoriesHeight = document.querySelector(".local-storage_categories").getBoundingClientRect().height
        let localStorageFiles = document.querySelector(".local-storage_files")

        localStorageFiles.style.height = `${window.innerHeight - localStorageHeadHeight - localStorageSearchHeight - localStorageCategoriesHeight - 60}px`
    }, [])

    return (
        <div className="local-storage">
            <div className="local-storage_head">
                <h3>
                    Local Storage
                </h3>
            </div>
            <div className="local-storage_search">
                <Input placeholder="Search" icon="search" />
            </div>
            <div className="local-storage_categories flex">
                <CategoryCard image={Gallery} name="Image" />
                <CategoryCard image={Video} name="Video" />
                <CategoryCard image={Music} name="Music" />
                <CategoryCard image={Gallery} name="Image" />
                <CategoryCard image={Video} name="Video" />
                <CategoryCard image={Music} name="Music" />
            </div>
            <div className="local-storage_files">
                <FileListCard image={Gallery} title="Annie's new car" size="4.8mb" fileType="jpeg" />
                <FileListCard image={Music} title="Franky Wah - Aftertime" size="9.2mb" fileType="mp3" />
                <FileListCard image={Video} title="Franky Wah - Aftertime Video" size="90.2mb" fileType="mp4" />
                <FileListCard image={Gallery} title="Annie's new car" size="4.8mb" fileType="jpeg" />
                <FileListCard image={Music} title="Franky Wah - Aftertime" size="9.2mb" fileType="mp3" />
                <FileListCard image={Video} title="Franky Wah - Aftertime Video" size="90.2mb" fileType="mp4" />
            </div>
        </div>
    )
}

export default LocalStorage