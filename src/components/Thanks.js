import "../App.css"


const Thanks = ({img}) => {
      return <div id="thanks">
        <div style={{alignSelf: "center", justifySelf: "center", width: "100%", height: "100%"}}>
          <img src={img} alt="Thank you" />
          <h1>Thank you!</h1>
          <p>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
      </div>
}


export default Thanks;