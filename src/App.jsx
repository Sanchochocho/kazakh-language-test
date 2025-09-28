import { useState } from 'react'
import Main from './components/Main/Main'
import Test from './components/Test/Test';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import TestHistory from './components/TestHIstory/TestHistory';

function App() {
  const quiz = [
    {
      question: "1950-жылдары компьютерлерде қандай технология қолданылды?",
      options: [
        "Транзисторлар мен микросхемалар",
        "Лампалар мен перфокарталар",
        "Лазерлер мен сенсорлы экрандар",
        "Кванттық процессорлар"
      ],
      correct: "Лампалар мен перфокарталар",
    },
    {
      question: "Алғашқы жаппай жоғары деңгейлі бағдарламалау тілі қайсысы болды?",
      options: ["LISP", "Pascal", "Fortran", "Java"],
      correct: "Fortran",
    },
    {
      question: "1950-жылдары бағдарламалау көбінесе қандай міндеттерге қолданылды?",
      options: [
        "Ойындар мен сайт жасау",
        "Ғылыми есептеулер мен әскери жобалар",
        "Мобильді қосымшалар жасау",
        "Графикалық дизайн"
      ],
      correct: "Ғылыми есептеулер мен әскери жобалар",
    },
    {
      question: "Жасанды интеллект саласын зерттеу үшін қай тіл жасалды?",
      options: ["COBOL", "LISP", "ALGOL", "Ada"],
      correct: "LISP",
    },
    {
      question: "Қай тіл бизнес-бағдарламалау мен деректерді өңдеуге бағытталды?",
      options: ["Pascal", "Fortran", "COBOL", "C++"],
      correct: "COBOL"
    },
    {
      question: "1950-жылдардағы бағдарламалауға тән ерекшелік қандай?",
      options: [
        "Бағдарламалар барлық компьютерге бірдей жазылды",
        "Жөндеу қолмен жасалды, жадының дамптарын басып шығару арқылы",
        "Көптеген дайын кітапханалар болды",
        "Интернет арқылы бірлесіп жұмыс істелді"
      ],
      correct: "Жөндеу қолмен жасалды, жадының дамптарын басып шығару арқылы",
    },
    {
      question: "Қай тіл UNIX-пен бірге бағдарламалық жасақтаманың тасымалдануына мүмкіндік берді?",
      options: ["Fortran", "Pascal", "C", "COBOL"],
      correct: "C",
    },
    {
      question: "Қай тілде алғаш рет объектіге бағытталған бағдарламалау (ООП) кеңінен қолданылды?",
      options: ["Smalltalk", "Ada", "Java", "Perl"],
      correct: "Smalltalk",
    },
    {
      question: "Қай тіл C тілінің өнімділігін объектілік модельмен үйлестірді?",
      options: ["Pascal", "C++", "LISP", "Rust"],
      correct: "C++",
    },
    {
      question: "Ada тілі қандай жүйелерге арналған?",
      options: [
        "Веб-даму",
        "Машиналық оқыту",
        "Әскери және авиациялық ендірілген жүйелер",
        "Графика мен ойындар"
      ],
      correct: "Әскери және авиациялық ендірілген жүйелер",
    },
    {
      question: "2000–2010-жылдары қандай әдістеме кеңінен таралды?",
      options: ["Agile және Scrum", "Каскадты модель", "V-модель", "Экстремалды тестілеу"],
      correct: "Agile және Scrum",
    },
    {
      question: "Күрделі қосымшаларды жеңілдету үшін 2000–2010-жылдары қандай фреймворктар пайда болды?",
      options: [
        "React, Angular, Django",
        "Fortran, COBOL, Pascal",
        "Smalltalk, Ada, C++",
        "Rust, Go, Scala"
      ],
      correct: "React, Angular, Django",
    },
    {
      question: "Қай тілдер iOS және Android мобильді платформаларына байланысты?",
      options: ["Java және Python", "Swift және Kotlin", "Ada және C++", "PHP және C#"],
      correct: "Swift және Kotlin",
    },
    {
      question: "2010–2020-жылдары қандай технологиялар қосымшаларды орналастыру тәсілін өзгертті?",
      options: ["Git және GitHub", "Docker және Kubernetes", "Fortran және COBOL", "HTML және CSS"],
      correct: "Docker және Kubernetes",
    },
    {
      question: "Қай заманауи тілдер жоғары жүктемелі жүйелер үшін танымал болды?",
      options: ["Rust және Go", "Pascal және LISP", "C және COBOL", "PHP және Swift"],
      correct: "Rust және Go",
    }
  ];

  return (
    <>
      <BrowserRouter basename='/kazakh-language-test'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/test' element={<Test quiz={quiz}/>}/>
            <Route path='/test_history' element={<TestHistory/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
