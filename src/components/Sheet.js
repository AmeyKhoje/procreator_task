import { useEffect, useState } from "react"
import { dummyFiles } from "./dummyFiles"
import FolderCard from "./FolderCard"
import Input from "./Input"

const Sheet = (props) => {

    const [ cloudInfoHeight, setCloudInfoHeight ] = useState(0)
    const [ searchInputHeight, setSearchInputHeight ] = useState(0)
    const [ windowWidth, setWindowWidth ] = useState(0)
    const [ sheetHeight, setSheetHeight ] = useState(0)
    const [ sheetSectionHeight, setSheetSectionHeight ] = useState(0)
    
    useEffect(() => {
        let topCont = document.querySelector(".cloud-user_info")
        let searchInput = document.querySelector(".search-input")
        let sheetSection = document.querySelector(".sheet-section")
        
        setWindowWidth(window.innerWidth)
        setCloudInfoHeight(topCont.getBoundingClientRect().height)
        setSearchInputHeight(searchInput.getBoundingClientRect().height)
        setSheetSectionHeight(sheetSection.getBoundingClientRect().height)
    }, [])

    useEffect(() => {
        let sheet = document.querySelector(".sheet")
        let sheetContent = document.querySelector(".sheet-content")
        let sheetContentSelected = document.querySelector(".sheet-content_selected")

        sheet.style.top = `${cloudInfoHeight - 50}px`;
        sheet.style.height =  `${window.innerHeight - cloudInfoHeight}px`
        sheetContent.style.marginTop = `${searchInputHeight}px`
        sheetContentSelected.style.height = `${window.innerHeight - cloudInfoHeight - searchInputHeight - sheetSectionHeight}px`

        setSheetHeight(sheet.getBoundingClientRect().height)


    }, [cloudInfoHeight])

    

    return (
        <div className="sheet">
            <div className="search-input">
                <Input placeholder="Search" icon="search" />
            </div>
            <div className="sheet-content">
                <div className="sheet-section flex flex-center">
                    <div className="section">
                        <button className="section-button">
                            Files
                        </button>
                    </div>
                    <div className="section">
                        <button className="section-button active">
                            Folders
                        </button>
                    </div>
                </div>
                <div className="sheet-content_selected">
                    <div className="folder-flex flex">
                        {
                            dummyFiles.map(folder => {
                                return (
                                    <FolderCard folder={folder} windowWidth={windowWidth} />
                                )
                            })
                        }
                        {
                            dummyFiles.map(folder => {
                                return (
                                    <FolderCard folder={folder} windowWidth={windowWidth} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sheet