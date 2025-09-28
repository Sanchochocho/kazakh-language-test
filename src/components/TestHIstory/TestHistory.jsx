import Header from "../Header/Header";
import './TestHistory.css'
const TestHistory = () => {
    const tests = JSON.parse(localStorage.getItem("testResults"));
    
    return(
        <>
            <Header/>
            {tests ?
                tests.map((item, index) => (
                    <div key={index} className="testCard">
                        <p className="testFIO">Аты-жөн : {item.fio}</p>
                        <p className="testGroup">Топ : {item.group}</p>
                        <p className="testResult">Дұрыс жауаптар : {item.correct}/{item.total}</p>
                        <p className="testTime">Аяқталу уақыты : {item.date}</p>
                    </div>
                ))
                : <p className="noneTest">Сізде өткен сынақтар жоқ</p>
            }
        </>
    )
}

export default TestHistory;