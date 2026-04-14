import './App.css'
import logo from "./assets/logo.svg"
import logo1 from "./assets/Illustration.svg"
import logo2 from "./assets/rasm1.svg"
import logo3 from "./assets/rasm2.svg"
import logo4 from "./assets/rasm3.svg"
import logo5 from "./assets/rasm4.svg"
import logo6 from "./assets/rasm5.svg"
import logo7 from "./assets/rasm6.svg"
import logo8 from "./assets/rasm7.svg"
import logo9 from "./assets/Icon.svg"
import logo10 from "./assets/the.svg"








function App() {
  return (
    <div>

      <header>

        <img src={logo} alt="logo" />

        <ul>
          <li>Home</li>

          <li>Features</li>

          <li>Community</li>

          <li>Blog</li>

          <li>Pricing</li>

          <button>Register Now </button>
        </ul>

      </header>

      <main>

        <div className="parent1">

          <a className='text1' href="">Lessons and insights </a>
          <a className='text2' href="">from 8 years</a>

          <p className='text3'  >Where to grow your business as a photographer: site or social media?</p>

          <button className='btn'  >Register</button>
        </div>

        <div className="parent2">

          <img className='logo1' src={logo1} alt="" />

        </div>

      </main>

      <section>

        <div className="left">

          <h1 className='text4' >Our Clients</h1>

          <p className='text5' >We have been working with some Fortune 500+ clients</p>

          <div className="rasmlar">

            <img className='rasm' src={logo2} alt="" />
            <img className='rasm' src={logo3} alt="" />
            <img className='rasm' src={logo4} alt="" />
            <img className='rasm' src={logo5} alt="" />
            <img className='rasm' src={logo6} alt="" />
            <img className='rasm' src={logo7} alt="" />
            <img className='rasm' src={logo8} alt="" />


          </div>

          <p className='text6'  >Manage your entire community in a single system </p>

          <div className="card">

            <div className="icon">

              <img className='icon1' src={logo9} alt="" />

              <h1 className='member'  >Membership Organisations</h1>

              <p className='our'  >
                Our membership management
                software provides full automation of
                membership renewals and payments
              </p>

            </div>


            <div className="icon">

              <img className='icon1' src={logo9} alt="" />

              <h1 className='member'  >Membership Organisations</h1>

              <p className='our'  >
                Our membership management
                software provides full automation of
                membership renewals and payments
              </p>

            </div>


            <div className="icon">

              <img className='icon1' src={logo9} alt="" />

              <h1 className='member'  >Membership Organisations</h1>

              <p className='our'  >
                Our membership management
                software provides full automation of
                membership renewals and payments
              </p>

            </div>

          </div>

        </div>

        <div className="right">

          <div className="right1">

            <img className='logo10' src={logo10} alt="" />

          </div>

          <div className="unseen">

            <h1 className='of'>
              The unseen of spending three years at Pixelgrade
            </h1>

            <p className='lorem'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
              porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam
              quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>

            <button className='more'>Learn More</button>

          </div>



        </div>


      </section>


    </div>
  )
}

export default App