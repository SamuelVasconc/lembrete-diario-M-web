import React from 'react'
import Head from 'next/head'
import { getRandom, dayHelper } from '../helpers/constans'
import Time from '../helpers/time'
import Widget from '../component/widget'
import Footer from '../component/footer'
import Router from 'next/router'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timezone: this.props.timezone,
      now: Time.validOrNull(this.props.timezone)
    }
  }

  static async getInitialProps(request) {
    const { tz } = request.query
    const timezone = tz && Time.zoneExists(tz) ? tz : 'UTC'
    const now = Time.validOrNull(timezone)

    return {
      timezone: timezone,
      initialReason: getRandom(dayHelper(now))
    }
  }

  changeTimeZone = (timezone) => {
    if (!Time.zoneExists(this.props.timezone)) {
      return
    }
    let newUrl = new URL(location)
    newUrl.searchParams.set('tz', timezone)

    Router.push(newUrl.pathname + newUrl.search)
    this.setState({
      timezone: timezone,
      now: new Time(timezone)
    })
  }

  render() {
    return (
      <>
        <Head>
          <title>Lembrete Diário para Maíra</title>
        </Head>
        <div
          className={`wrapper ${true && 'its-friday'}`}
        >
          <Widget
            initialReason={this.props.initialReason}
            now={this.state.now}
          />
          <div className="meta">
            <Footer
              timezone={this.state.timezone}
              changeTimeZone={this.changeTimeZone}
            />
          </div>
        </div>
      </>
    )
  }
}

export default Page
