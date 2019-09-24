import React from "react"
import { Card, ListGroup } from "react-bootstrap"

function JobCard({
  obj: { key, startDate, endDate, descriptions, img, location, job },
}) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const startMonth = months[parseInt(startDate.split("-")[0]) - 1]
  const startYear = parseInt(startDate.split("-")[1])
  const endMonth = months[parseInt(endDate.split("-")[0]) - 1]
  const endYear = parseInt(endDate.split("-")[1])

  return (
    <Card className="h-100 shadow-lg" style={{ borderColor: "#c0deed" }}>
      <Card.Header style={{ backgroundColor: "#c0deed", color: "black", borderBottomColor:"#c0deed" }}>
        {startMonth} {startYear} - {endMonth} {endYear}
      </Card.Header>
      <div style={{ margin: "2em" }}>
        <Card.Img variant="top" src={img} />
      </div>

      <Card.Body>
        <Card.Title>{key}</Card.Title>
        <Card.Title>
          <h6>{job}</h6>
        </Card.Title>
        <Card.Text>{location}</Card.Text>
        <ListGroup variant="flush">
          {descriptions.map(string => {
            return (
              <ListGroup.Item
                style={{
                  borderTop: "1px solid #0091b5",
                }}
              >
                {string}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}
export default JobCard
