import { Key, Row, Value } from './DemographicInformationTable.sc'
import React, { FunctionComponent } from 'react'

interface DemographicInformationTableProps {
  data: {
    [key: string]: string
  }
}

const DemographicInformationTable: FunctionComponent<
  DemographicInformationTableProps
> = ({ data }) => (
  <>
    {Object.keys(data).map((key) => (
      <Row key={key}>
        <Key>{key}</Key>
        <Value>{data[key]}</Value>
      </Row>
    ))}
  </>
)

export default DemographicInformationTable
