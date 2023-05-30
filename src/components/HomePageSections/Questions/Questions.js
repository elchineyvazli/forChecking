import './Questions.scss'
import TextPart from './../../Normal/TextPart/TextPart';
import QuestionsContainer from './../../Normal/QuestionsContainer/QuestionsContainer';
const Questions = () => {
    return (
        <section className="questions">
            <TextPart hValue="Tez-tez verilən suallar"
                pValue="Artıq JedAcademy ödənişlərini FizzaPay ilə ödəmək mümkündür"
                hColorValue="#102B55"
                pColorValue="#FF7A00"
                pWidth="90%"
            />
            <QuestionsContainer />
        </section>
    )
}

export default Questions