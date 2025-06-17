# React Component Flow Map (Simple Counter)

index.html  
└── <div id="root"></div>   ← React mounts here

main.jsx  
└── ReactDOM.createRoot(...).render(<App />)  
    └── App.jsx  
        ├── useState(seconds)         ← holds the current number  
        ├── useState(running)         ← holds play/pause state  
        ├── useEffect                 ← starts or stops timer based on `running`  
        └── Renders:  
            ├── <SecondsCounter  
            │     seconds={seconds}  
            │     places={6}  
            │     dimmed={!running}  
            │   />  
            └── <button>Pause/Start</button>  
                <button>Reset</button>  

SecondsCounter.jsx  
└── Receives props:  
    ├── seconds  
    ├── places  
    └── dimmed  
    └── Renders:  
        ├── <Clock />  ← icon from lucide-react  
        └── digits.map(...) → makes a <div> for each digit
