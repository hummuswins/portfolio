import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { CardColumns, Col, Container, Image, Row } from "react-bootstrap"
import JobCard from "../components/jobcard"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JSONData from "../jobs/job.json"

library.add(fab, faCheckSquare, faCoffee)

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { newArr: [] }
  }

  componentDidMount() {
    const element = document.querySelector(".card-columns")
    const count = getComputedStyle(element).columnCount
    const newArr = []

    if (count === "auto") {
      for (const data in JSONData) {
        if (JSONData.hasOwnProperty(data))
          newArr.push(JSONData[data])
      }
    } else {
      let i = 0,
        j = 1
      for (const data in JSONData) {
        if (JSONData.hasOwnProperty(data)) {
          if (data !== "0" && data % 2 === 0) {
            j += 1
            i = 0
          }
          newArr.splice(j + i++ * j - 1, 0, JSONData[data])
        }
      }
    }
    this.setState({ newArr: newArr })
  }

  render() {
    return <Layout addP={true}>
      <SEO title="Home"/>
      {/* <Button variant={"primary"}>Contact Me</Button>
    <p></p>
    <div className={"flex-container"}>
      <a
        href="https://www.linkedin.com/in/james-anh-nguyen"
        style={{ color: `#4875B4` }}
      >
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="6x" />
      </a>
    </div> */}
      <h2>Education</h2>
      <br/>
      <Container>
        <Row>
          <Col sm={4}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/8/8f/University_of_California%2C_Irvine_logo.svg"/>
          </Col>
          <Col>
            <h2>University of California, Irvine</h2>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <i>Computer Science</i>
              </li>
              <li style={{ color: "grey" }}>2016-2019</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <br/>
      <h2>Jobs</h2>
      <style type="text/css">
        {`@media (min-width: 768px) {
        .card-columns {
          column-count: 2;
        }
      }`}
      </style>
      <CardColumns>
        {this.state.newArr.map(obj => {
          return <JobCard obj={obj}/>
        })}
      </CardColumns>
      {/*<h2>Skills</h2>*/}
      {/*<p>*/}
      {/*<span class="border rounded border-danger p-2 mx-1 bg-danger text-white">C++</span>*/}
      {/*<span class="border rounded border-danger p-2 mx-1 bg-danger text-white">Java</span>*/}
      {/*<span class="border rounded border-danger p-2 mx-1 bg-danger text-white">Python</span>*/}
      {/*</p>*/}
    </Layout>
  }
}

const Index = () => (
  <IndexPage/>
)
export default Index
