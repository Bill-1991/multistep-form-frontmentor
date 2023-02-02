import "../App.css"


const Thanks = ({img}) => {
      return <div id="thanks">
          <img src={img} alt="Thank you" />
          <h1>Thank you!</h1>
          <p>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com</p>
      </div>
}


export default Thanks;