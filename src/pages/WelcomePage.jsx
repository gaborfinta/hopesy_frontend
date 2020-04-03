import React from 'react';

function WelcomePage() {
  return (
    <div>
      <section
        style={{
            margin: '0 120px'
        }}
      >
        <header
            style={{
                display: 'grid',
                marginTop: '50px',
                gridTemplateColumns: '1fr 1fr'
            }}    
        >
            <img src="./images/logo3.png" width="100" alt="logo" />
            <div style={{
                marginLeft: 'auto',
                fontSize: '20px'
            }}>
              <ul>
                <li 
                    style={{
                        display: 'inline-block',
                        margin: '0 20px'
                    }}
                >
                    REGISZTRÁCIÓ
                </li>
                <li style={{
                        display: 'inline-block',
                        margin: '0 20px'
                    }}
                >
                    BELÉPÉS
                </li>
              </ul>
            </div>
        </header>  
      </section>

      <section
        id="main" 
        style={{
            margin: '0 120px',
            marginTop: '200px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        }}
      >
        <div
            className="main-text"
            style={{
                fontSize: '45px',
                fontWeight: 700,
                lineHeight: 1.5
            }}
        >
          <span 
            style={{
                borderBottom: '2px solid #3ff1aa'
              }}
          >hopesy.io
          </span> <br/> ahol a közösségi felelősségvállalás <br/>
          új értelmet nyer
        </div>

        <img
            src="./images/basket.png"
            widt="520"
            height="300"
            alt="leaf-main-image"
            style={{
                marginLeft: '10%'
            }}
            />

      </section>
    </div>
  );
}

export default WelcomePage;
