import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTopMenu from './components/MyTopMenu'
import ControlledCarousel from './components/ControlledCarousel'
import Form from 'react-bootstrap/Form';
import { Counter } from './features/counter/counter'
import { useSelector, useDispatch } from 'react-redux'
import { setS, setP, setN } from './features/mortgage/MortgageSlice.js'

// import { Button } from 'reactstrap'
// import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
function App(props = { foo: 123 }) {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)

  const [txt, setTxt] = useState('')

  const [selectValue, setSelectValue] = useState('')
  const S = useSelector((state) => state.mortgage.S)
  const P = useSelector((state) => state.mortgage.P)
  const N = useSelector((state) => state.mortgage.N)
  const dispatch = useDispatch()


  return (
    <>
      <MyTopMenu />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="container">
        <Counter />
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <Form.Label >Тело кредита</Form.Label>
          <Form.Control type="text" value={S} onChange={ev => dispatch(setS(ev.target.value))}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Form.Label >Процентная ставка</Form.Label>
          <Form.Control type="text" value= {P} onChange={ev => dispatch(setP(ev.target.value))}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Form.Label >Срок кредита</Form.Label>
          <Form.Control type="text" value={N} onChange={ev => dispatch(setN(ev.target.value))}
          />
        </div>
      </div>

      <div className="row">
        <p>Платёж: <strong>{(S*(P/1200)/(1-(1+P/1200)**(-N))).toFixed(3)}</strong></p>
      </div>

      <div className="container">
        <ControlledCarousel />
      </div>
      <pre>
        Поле ввода: {txt} <br />
        Выпадающий список: {selectValue} <br />

      </pre>

      <div className="container">
        <Form.Label htmlFor="inputText5">Text</Form.Label>
        <Form.Control
          type="text"
          id="inputText5"
          aria-describedby="TextHelpBlock"
          onChange={ev => setTxt(ev.target.value)}
        />
        <Form.Text id="passwordHelpBlock" muted>
          Text
        </Form.Text>
      </div>

      <div className="container">
        <Form.Select

          aria-label="Default select example"
          onChange={ev => setSelectValue(ev.target.value)}
        >


          <option>Выберите пункт меню</option>
          <option value="1">Один</option>
          <option value="2">Два</option>
          <option value="3">Три</option>
        </Form.Select>
      </div>
      <hr />

      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          Увеличь счётчик {count}
        </button>
        <hr />
        <Button color="primary" onClick={() => setCount((count) => count + 2)}>
          Увеличь счётчик  на 2: {count}
        </Button>
        <hr />
        <Button color="primary" onClick={() => setOpen(!open)}>
          окно
        </Button>
        <hr />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* <Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalHeader>
          Заголовок модального окна
        </ModalHeader>
        <ModalBody>
          Тело модального окна
        </ModalBody>
      </Modal> */}

    </>
  )
}




export default App
