import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  const executeCalliOS = (url) => {
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", url);
    document.body.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
  }

  /*iOS跳转功能方法
     *func_id为功能ID
     *para 为参数，形式如 fund_market=xxxx&fund_name=xxxx&fund_code=xxxx
     */
  const jumpIOS = (func_id,para) => {
      executeCalliOS("innerAppCall://CCBCallCenter?funcid="+func_id+"&"+para)
  }


  const openHref = (func_id,para) => {
    jumpIOS(func_id, para)
  }


  return (
    <div className="container">
      <a className="item" onClick={() => openHref()}>开通手机银行</a>
      <a className="item" onClick={() => openHref('01991001','wl00002020011710')}>签约建行快贷</a>
      <a className="item" onClick={() => openHref('07002001','')}>购买理财</a>
      <a className="item" onClick={() => openHref('07005000','')}>购买基金</a>
      <a className="item" onClick={() => openHref('01991001','jrsc002020030501')}>购买贵金属</a>
      <a className="item" onClick={() => openHref('01991001','su00002020012203')}>办理结售汇</a>
      <a className="item" onClick={() => openHref('05004001','')}>办理信用卡</a>
      <a className="item" onClick={() => openHref('12008000','')}>签约龙支付</a>
      {/* <div>链接1</div>
      <div>链接1</div>
      <div>链接1</div>
      <div>链接1</div> */}
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1389639650,3305055474&fm=26&gp=0.jpg" />
      {/* <Link href="/test">
        <h1>谢谢</h1>
      </Link> */}

      <style jsx>{`
        .item{
          color: cadetblue;
          margin-bottom: 20px;
          text-decoration: underline;
        }
        .item:visited{
            color: red;
          }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
