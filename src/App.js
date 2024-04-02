import React, { useState } from 'react';
import './App.css';
import * as math from 'mathjs';
import img1 from './img/day.svg';


function App() {
  const [textvalue, settextvalue] = useState("")
  const [answer, setanswer] = useState("")
  // const [sanitizedInput, setsanitizedInput] = useState('')
  // const [display,setdisplay] =useState('')


  const handleExpression = (e) => {
    settextvalue(e.target.value);
  };

  const temp = (textvalue) => {
    console.log("text=" + textvalue);

    const sanitizedInput = textvalue
      .replace(/√/g, 'sqrt')
      .replace(/%/g, '(1/100)')
      .replace(/x/g, '*')
      .replace(/÷/g, '/')
      .replace(/e/g, '(2.718)')
      .replace(/¹/g, '1')
      .replace(/²/g, '2')
      .replace(/³/g, '3')
      .replace(/⁴/g, '4')
      .replace(/⁵/g, '5')
      .replace(/⁶/g, '6')
      .replace(/⁷/g, '7')
      .replace(/⁸/g, '8')
      .replace(/⁹/g, '9')
      .replace(/⁰/g, '0')
      .replace(/'/g, '.')
      .replace(/ /, '^')
      .replace(/π/, '3.14')
      .replace(/log₂/g, 'log2')
      .replace(/ln/g, 'log')
      .replace(/\|/g, 'abs(')
      .replace(/\|/g, '')

      ;


    console.log("sanitized= " + sanitizedInput);
    const result = math.evaluate(sanitizedInput);
    console.log("rrrrrr" + result);
    setanswer(result);
    console.log("ans=" + sanitizedInput);

  };

  const calc = () => {
    try {
      temp(textvalue);
    }
    catch (error) {
      setanswer('invalid input')

    }
  };

  // const combined = () =>{
  //   calculate();
  //   // togglezindex();
  // }


  const calculate = (value) => {
    if (value === '.' && textvalue.includes('.') && !textvalue.endsWith('1') && !textvalue.includes('-') && !textvalue.includes('x') && !textvalue.includes('/')) return;
    if (value === '+' && textvalue.endsWith('+')) return;
    if (value === '-' && textvalue.endsWith('-')) return;
    if (value === 'x' && textvalue.endsWith('x')) return;
    if (value === '÷' && textvalue.endsWith('÷')) return;
    if (value === '÷' && textvalue.endsWith('÷')) return;
    if (value === '!' && textvalue.endsWith('!')) return;
    if (value === ' ' && textvalue.endsWith(' ')) return;





    // settextvalue(textvalue)
    settextvalue((preTextValue) => preTextValue === "0" ? value : preTextValue + value)

    // setdisplay(textvalue.replace(/ /g, ''))


    if (value === 'back')
      settextvalue(textvalue.slice(0, -1))
    // else if (value === '^')
    // settextvalue(textvalue + ' ')


  }

  // ------------------------------- more screen -------------------------------
  const [vis_more, setvis_more] = useState('hidden');
  const [color_more, setcolor_more] = useState('wheat');

  const toggle_more = () => {
    console.log(vis_more + "p")
    setvis_more(vis_more === 'hidden' ? 'visible' : 'hidden');
    setcolor_more(color_more === 'wheat' ? ' rgb(233, 148, 99)' : 'wheat');
    setcolor_power('wheat');
    setvis_power('hidden');
    console.log('more button' + vis_more)
  }
  // ------------------------------------------------------------------------




  // -----------------------------   power menu   --------------------------------
  const [vis_power, setvis_power] = useState('hidden');
  const [color_power, setcolor_power] = useState('wheat');
  const toggle_power = () => {
    console.log(vis_power);
    setvis_power(vis_power === 'visible' ? 'hidden' : 'visible');
    setcolor_power(color_power === 'wheat' ? ' rgb(233, 148, 99)' : 'wheat');

    setcolor_more('wheat');
    setvis_more('hidden');

    console.log(vis_power === 'visible' ? 'true' : 'false')
    console.log(color_power)

    settextvalue((TextValue) => TextValue === "" ? textvalue : TextValue + (textvalue.endsWith(" ") ? "" : " " ) )

  }
  // --------------------------------------------------------------------------
  const clear = () => {
    settextvalue("");
    setanswer("");
    setcolor_power('wheat');
    setcolor_more('wheat');
    setvis_more('hidden');
    setvis_power('hidden');
  }
  let blk_grd = ' radial-gradient(rgb(0, 0, 0), rgb(85, 85, 92), rgb(131, 121, 121))';
  let wht_grd = ' radial-gradient(rgb(24, 31, 72), rgb(126, 126, 207), rgb(255, 255, 255))';
  const [gradient, setgradient] = useState(wht_grd);

  const [back, setback] = useState(' rgba(255, 255, 255, 0.445)');
  const [btnBack, setbtnBack] = useState('');

  const [bodyBack, setbodyBack] = useState('linear-gradient(30deg, rgba(133, 196, 231, 0.839), rgba(141, 134, 128, 0.794), rgba(214, 132, 55, 0.605))');


  const day = (
    <div className='day'>
      <img src={img1} alt="" />
    </div>
  );

  const night = (
    <div className='night'><i class="fa-solid fa-moon" style={{ color: '#c2c7d1', fontSize: '25px' }}></i></div>
  );

  const [ThemeSwitch, setThemeSwitch] = useState(false);
  const [Theme, setTheme] = useState();
  const [shadow, setshadow] = useState('inset 1px 1px 30px rgb(234, 221, 221)');

  const toggle_theme = () => {
    setThemeSwitch(!ThemeSwitch)
    console.log(ThemeSwitch)
    setbtnBack(btnBack === '' ? 'rgba(101, 124, 142, 0.744)' : '');
    // console.log(Theme);
    setback(back === ' rgba(0, 0, 0, 0.445)' ? ' rgba(255, 255, 255, 0.445' : ' rgba(0, 0, 0, 0.445)');
    setshadow(shadow === 'inset 1px 1px 30px rgb(234, 221, 221)' ? ' 10px 10px 30px rgba(0, 0, 0, 0.445)' : 'inset 1px 1px 30px rgb(234, 221, 221)');
    setgradient(gradient === wht_grd ? blk_grd : wht_grd);
    setbodyBack(bodyBack === 'linear-gradient(30deg, rgba(133, 196, 231, 0.839), rgba(141, 134, 128, 0.794), rgba(214, 132, 55, 0.605))' ? 'linear-gradient(to right top, #000000, #1c1b1c, #323032, #48464a, #5e5e63, #606267, #61656b, #63696e, #52595c, #43494a, #35393a, #272a2a)' : 'linear-gradient(30deg, rgba(133, 196, 231, 0.839), rgba(141, 134, 128, 0.794), rgba(214, 132, 55, 0.605))');
    // console.log('btn=' + btnBack);
    // console.log(back);
    // console.log('grd='+gradient);
  }




  return (
    <div className="App" style={{ background: bodyBack }}>
      <div className="circle" style={{ backgroundImage: gradient }}></div>
      <div
        onClick={() => toggle_theme()}
        className="theme"
        style={{ backgroundColor: back, boxShadow: shadow }}
      >
        {ThemeSwitch ? night : day}
      </div>

      <div className="body" style={{ backgroundColor: "", boxShadow: shadow }}>
        <div className="myscreen">
          <div value="787" className=""></div>
          <input
            className="mytext"
            onChange={handleExpression}
            value={textvalue}
            placeholder="0"
            type="text"
          />
          <div className="mytext">{answer}</div>
        </div>
        <div className="buttons">
          {/* ------------------------operator----------------------------- */}
          <div className="narrow-btn">
            <button
              onClick={() => toggle_more()}
              className="btn"
              style={{ backgroundColor: color_more }}
            >
              {" "}
              <i class="fa-solid fa-qrcode"></i>{" "}
            </button>
            <button onClick={(e) => calculate("√(")} className="btn">
              <i class="fa-solid fa-square-root-variable"></i>
            </button>
            <button
              onClick={() => toggle_power()}
              className="btn"
              style={{ backgroundColor: color_power }}
            >
              xʸ
            </button>
            <button onClick={(e) => calculate("back")} className="btn">
              <i class="fa-solid fa-delete-left"></i>
            </button>
            {/* -------------------------------------------------------------- */}
          </div>
          <div className="operator1">
            <button onClick={clear} className="btn">
              C
            </button>
            <button onClick={(e) => calculate(")")} className="btn">
              ()
            </button>
            <button onClick={(e) => calculate("÷")} className="btn">
              <i class="fa-solid fa-divide"></i>
            </button>
            <button onClick={(e) => calculate("x")} className="btn">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="bottom-btn">
            <div className="num">
              <div className="num1">
                <button
                  onClick={(e) => calculate("7")}
                  className="btn"
                  style={{ backgroundColor: btnBack }}
                >
                  7
                </button>
                <button
                  onClick={(e) => calculate("8")}
                  className="btn"
                  style={{ backgroundColor: btnBack }}
                >
                  8
                </button>
                <button
                  onClick={(e) => calculate("9")}
                  className="btn"
                  style={{ backgroundColor: btnBack }}
                >
                  9
                </button>
                <button
                  onClick={(e) => calculate("4")}
                  className="btn"
                  style={{ backgroundColor: btnBack }}
                >
                  4
                </button>
                <button
                  onClick={(e) => calculate("5")}
                  className="btn"
                  style={{ backgroundColor: btnBack }}
                >
                  5
                </button>
                <button
                  onClick={(e) => calculate("6")}
                  className="btn"
                  style={{ backgroundColor: btnBack }}
                >
                  6
                </button>
                <button
                  onClick={(e) => calculate("1")}
                  className="btn"
                  style={{ backgroundColor: btnBack }}
                >
                  1
                </button>
                <button
                  onClick={(e) => calculate("2")}
                  className="btn"
                  style={{ backgroundColor: btnBack }}
                >
                  2
                </button>
                <button
                  onClick={(e) => calculate("3")}
                  className="btn"
                  style={{ backgroundColor: btnBack }}
                >
                  3
                </button>
              </div>
              <div className="num2">
                <button
                  onClick={(e) => calculate("0")}
                  className="btn"
                  style={{ backgroundColor: btnBack }}
                >
                  0
                </button>
                <button
                  onClick={(e) => calculate(".")}
                  className="btn"
                  style={{ backgroundColor: btnBack }}
                >
                  .
                </button>
              </div>
            </div>
            <div
              style={{ visibility: vis_power, position: "absolute" }}
              className="num_a"
            >
              <div className="num1">
                <button onClick={(e) => calculate("⁷")} className="btn">
                  7
                </button>
                <button onClick={(e) => calculate("⁸")} className="btn">
                  8
                </button>
                <button onClick={(e) => calculate("⁹")} className="btn">
                  9
                </button>
                <button onClick={(e) => calculate("⁴")} className="btn">
                  4
                </button>
                <button onClick={(e) => calculate("⁵")} className="btn">
                  5
                </button>
                <button onClick={(e) => calculate("⁶")} className="btn">
                  6
                </button>
                <button onClick={(e) => calculate("¹")} className="btn">
                  1
                </button>
                <button onClick={(e) => calculate("²")} className="btn">
                  2
                </button>
                <button onClick={(e) => calculate("³")} className="btn">
                  3
                </button>
              </div>
              <div className="num2">
                <button onClick={(e) => calculate("⁰")} className="btn">
                  0
                </button>
                <button onClick={(e) => calculate("'")} className="btn">
                  .
                </button>
              </div>
            </div>
            <div className="operator2">
              <button onClick={(e) => calculate("-")} className="btn">
                -
              </button>
              <button onClick={(e) => calculate("+")} className="btn">
                +
              </button>
              <button onClick={calc} className="btn">
                =
              </button>
            </div>

            {/* -----------------------more option---------------------------- */}
            <div
              style={{ visibility: vis_more, position: "absolute" }}
              className="more_option"
            >
              <div className="num1">
                <button onClick={(e) => calculate("sin(")} className="more_btn">
                  sin
                </button>
                <button onClick={(e) => calculate("cos(")} className="more_btn">
                  cos
                </button>
                <button onClick={(e) => calculate("tan(")} className="more_btn">
                  tan
                </button>
                <button onClick={(e) => calculate("π")} className="more_btn">
                  π
                </button>
                <button
                  onClick={(e) => calculate("log₂(")}
                  className="more_btn"
                >
                  log₂
                </button>

                <button onClick={(e) => calculate("ln(")} className="more_btn">
                  ln
                </button>
                <button onClick={(e) => calculate("!")} className="more_btn">
                  x!
                </button>
                <button onClick={(e) => calculate("abs(")} className="more_btn">
                  |x|
                </button>
                <button onClick={(e) => calculate("e")} className="more_btn">
                  e
                </button>
              </div>
              <div className="num2">
                <button onClick={(e) => calculate("0")} className="more_btn">
                  0
                </button>
                <button onClick={(e) => calculate("%")} className="more_btn">
                  %
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
