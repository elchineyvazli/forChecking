import "./QuestionsContainer.scss"
import DropDown from './../DrowDown/DropDown';

const QuestionsContainer = () => {
    return (
        <div
            className='questionsContainer'
        >
            <DropDown
                h1Value="Tədris kursundan hansısa ayrı proqramları öyrənmək mümkündürmü?"
                pValue="Akademiyamız üstünlüyü proqramlaşdırma,
                 dizayn və kibertəhlükəsizlik sahələrinə bütöv peşəkar təhsilə verir.
                 Biz əminik ki, 
                 tədris proqramımız IT sahəsində yeni peşə qazanmağınız üçün,
                 lazımlı və ən aktual biliklərlə təmin edə biləcək."
                heightValue="auto"
                overflowValue="visible"
            />
            <DropDown
                h1Value="Akademiyada təhsilimi bitirdikdən sonra mən hansı sənəd / sertifikat əldə edəcəm?"
                pValue="Akademiyamız üstünlüyü proqramlaşdırma, dizayn və kibertəhlükəsizlik sahələrinə bütöv peşəkar təhsilə verir. Biz əminik ki, tədris proqramımız IT sahəsində yeni peşə qazanmağınız üçün, lazımlı və ən aktual biliklərlə təmin edə biləcək."
            />
            <DropDown
                h1Value="Kompüterim yoxdursa Akademiyada məşğul ola bilərəmmi?"
                pValue="Akademiyamız üstünlüyü proqramlaşdırma, dizayn və kibertəhlükəsizlik sahələrinə bütöv peşəkar təhsilə verir. Biz əminik ki, tədris proqramımız IT sahəsində yeni peşə qazanmağınız üçün, lazımlı və ən aktual biliklərlə təmin edə biləcək."
            />
            <DropDown
                h1Value="Ev tapşırıqları varmı və onların yerinə yetirilməsi nə qədər zaman tələb edir?"
                pValue="Akademiyamız üstünlüyü proqramlaşdırma, dizayn və kibertəhlükəsizlik sahələrinə bütöv peşəkar təhsilə verir. Biz əminik ki, tədris proqramımız IT sahəsində yeni peşə qazanmağınız üçün, lazımlı və ən aktual biliklərlə təmin edə biləcək."
            />
        </div>
    )
}

export default QuestionsContainer