import React, { useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import {
  Tab,
  Tabs,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Grid,
  Paper,
  Button,
  Icon,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core'

import pdfIcon from './pdf-24.png'
import downIcon from './down-24.png'
import upIcon from './up-24.png'

function Shop({}) {
  return (
    <>
      <h3>How to Enroll</h3>
      <p>
        2020 Annual Enrollment starts Oct 15th. To enroll now you must qualify
        for a <a href="">Special Enollment Peroid</a>.
      </p>
      <div>
        <Button variant="contained" color="primary">
          Enroll now
        </Button>
      </div>

      <p>
        Our plans are only available in certain places. Make sure you live in
        our <a href="">service area</a>.
      </p>
    </>
  )
}

function View({}) {
  return (
    <>
      <h3>Take charge of your health</h3>
      <ul>
        <li>
          <a href="">Log in</a> to your member account to manage more plan
          details
        </li>
        <li>
          Download the <a href="">app</a>
        </li>
        <li>
          Visit with a doctor at 1-888-912-0904 or through the
          <a href="">member account</a>
          or <a href="">app</a>
        </li>
        <li>
          Get $360 for fitness with
          <a href="">Be Fit</a>
        </li>
        <li>
          Earn rewards with
          <a href="">Rally</a>
        </li>
        <li>
          <a href="">Track wellness activities</a> to earn up to $50
        </li>
        <li>
          Learn how <a href="">care coordination</a> can help you
        </li>
        <li>
          Traveling healthy with
          <a href="">Assist America</a>
        </li>
        <li>
          Save on <a href="">TruHearing Select</a> hearing aids
        </li>
      </ul>
    </>
  )
}

export default function PlanDetail({ plan, shopView, classes }) {
  const tabs = ['Overview', 'Medical', 'Pharmacy']
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [selectedAccordionIndex, setSelectedAccordionIndex] = useState(-1)

  return (
    <div className="wrapper">
      <ScrollableAnchor id="section_top">
        <div className="tabs">
          <Tabs
            value={selectedTabIndex}
            onChange={(e, index) => setSelectedTabIndex(index)}
            indicatorColor="primary"
            textColor="primary"
          >
            {tabs.map((label, i) => (
              <a href={`#section_${i}`}>
                <Tab label={label} />
              </a>
            ))}
          </Tabs>
        </div>
      </ScrollableAnchor>

      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <ScrollableAnchor id="section_0">
            <h1>{plan.NAME}</h1>
          </ScrollableAnchor>

          <Table className={classes.table}>
            <TableBody>
              <TableRow className={classes.tableRow}>
                <TableCell>Monthly Premium</TableCell>
                <TableCell>{plan.PREMIUM}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Medical Deductible</TableCell>
                <TableCell>{plan.MEDDEDUCTIBLE}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Prescription Drug Deductible</TableCell>
                <TableCell>{plan.RXDEDUCTIBLE}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Yearly Out-of-Pocket Max</TableCell>
                <TableCell>
                  <p>Tier 1: {plan.LIMIT_t1}</p>
                  <p>Tier 2: {plan.LIMIT_t2 || 'NA'}</p>
                  <p>Out of Network: {plan.LIMIT_oon || 'NA'}</p>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper className={classes.specialNote}>
            {shopView.toLowerCase() === 'shop' ? <Shop /> : <View />}
          </Paper>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Button variant="outlined" className={classes.button}>
            <img src={pdfIcon} />
            Evidence of Coverage
          </Button>

          <Button variant="outlined" className={classes.button}>
            <img src={pdfIcon} />
            Summary of Benefits
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <ScrollableAnchor id="section_1">
            <h2>
              Medical Benefits
              <small>
                <a href={'#section_top'}>top</a>
              </small>
            </h2>
          </ScrollableAnchor>
          <p>
            This is an overview of what you pay for commonly used benefits $ =
            copay. % = coinsurance
          </p>

          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.tableRow}>
                <TableCell></TableCell>
                <TableCell>Tier 1</TableCell>
                <TableCell>Tier 2</TableCell>
                <TableCell>Out of Network</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow className={classes.tableRow}>
                <TableCell>Primary Care Physician Office Visit</TableCell>
                <TableCell>{plan.PCP_t1 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.PCP_t2 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.PCP_oon || 'Not Applicable'}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Specialist Office Visit</TableCell>
                <TableCell>{plan.SPECIALIST_t1 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.SPECIALIST_t2 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.SPECIALIST_oon || 'Not Applicable'}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Physical Therapy</TableCell>
                <TableCell>{plan.PT_t1 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.PT_t2 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.PT_oon || 'Not Applicable'}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Chiropractic Care</TableCell>
                <TableCell>{plan.CHIRO_t1 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.CHIRO_t2 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.CHIRO_oon || 'Not Applicable'}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Lab</TableCell>
                <TableCell>{plan.LAB_t1 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.LAB_t2 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.LAB_oon || 'Not Applicable'}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>X-Ray</TableCell>
                <TableCell>{plan.XRAY_t1 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.XRAY_t2 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.XRAY_oon || 'Not Applicable'}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Ambulance</TableCell>
                <TableCell>{plan.AMBULANCE_t1 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.AMBULANCE_t2 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.AMBULANCE_oon || 'Not Applicable'}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>
                  Emergency Care <br /> Emergency care's available worldwide.
                </TableCell>
                <TableCell>{plan.EMERGENCY_t1 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.EMERGENCY_t2 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.EMERGENCY_oon || 'Not Applicable'}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Urgent/Convenient Care</TableCell>
                <TableCell>{plan.URGENT_t1 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.URGENT_t2 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.URGENT_oon || 'Not Applicable'}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Outpatient Hospital Care</TableCell>
                <TableCell>{plan.OUTHOSP_t1 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.OUTHOSP_t2 || 'Not Applicable'}</TableCell>
                <TableCell>{plan.OUTHOSP_oon || 'Not Applicable'}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>
                  Inpatient Hospital Care <br /> (Including services received)
                </TableCell>
                <TableCell>
                  {plan.INHOSP_t1.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {plan.INHOSP_t2.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {plan.INHOSP_oon.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>
                  Skilled Nursing Facility <br /> Noncustodial care based on
                  medical necessity
                </TableCell>
                <TableCell>
                  {plan.SNF_t1.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {plan.SNF_t2.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {plan.SNF_oon.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <ScrollableAnchor id="section_2">
            <h2>
              Drug and Pharmacy Benefits{' '}
              <small>
                <a href={'#section_top'}>top</a>
              </small>
            </h2>
          </ScrollableAnchor>

          <div>
            <Button className={classes.button} variant="outlined">
              Find a Pharmacy
            </Button>
            <Button className={classes.button} variant="outlined">
              Check Drug Coverage
            </Button>
          </div>

          <Card className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              title="$0 Tier 1 Generics"
            />
            <CardContent>
              You can get Tier 1 generic drugs for $0 when you fill your
              prescription at Walgreens or other preferred pharmacies. You can
              also get drugs at other standard network pharmacies for a low
              cost.
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} title="Retail 90" />
            <CardContent>
              Fill a 90-day supply of your Tier 1 medications at $0 and Tier 2
              and 3 medications for a 2-month copay at Walgreens or other
              preferred cost-sharing pharmacies. A 90-day supply of your Tier 1
              through 3 medications is available for a 2.5-month copay at our
              other standard cost-sharing pharmacies. This applies in store or
              by mail order.
            </CardContent>
          </Card>

          <div className={classes.note}>
            Prices listed are for 30-day retail. If there is a lower-priced deal
            at the pharmacy than what you’d pay through us, you will get the
            drugs for that lower price.
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow className={classes.tableRow}>
                <TableCell>Prescription Drugs Deductible</TableCell>
                <TableCell>{plan.RXDEDUCTIBLE}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>
                  Tier 1 Preferred Generic at Preferred Pharmacy
                </TableCell>
                <TableCell>{plan.RXPRE_t1}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Tier 1 Preferred Generic</TableCell>
                <TableCell>{plan.RX_t1}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Tier 2 Generic</TableCell>
                <TableCell>{plan.RX_t2}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Tier 3 Brand</TableCell>
                <TableCell>{plan.RX_t3}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Tier 4 Non-Preferred</TableCell>
                <TableCell>{plan.RX_t4}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Tier 5 Specialty</TableCell>
                <TableCell>{plan.RX_t5}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div>
            <Button variant="outlined" className={classes.button}>
              <img src={pdfIcon} />
              Drug Formulary
            </Button>

            <Button variant="outlined" className={classes.button}>
              <img src={pdfIcon} />
              Pharmacy Directory
            </Button>
          </div>

          <Table className={classes.table}>
            <TableBody>
              <TableRow className={classes.tableRow}>
                <TableCell>Extra Help Paying for Prescriptions</TableCell>
                <TableCell>
                  <img
                    src={selectedAccordionIndex === 0 ? upIcon : downIcon}
                    onClick={() =>
                      setSelectedAccordionIndex(
                        selectedAccordionIndex == 0 ? -1 : 0
                      )
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow
                style={{
                  display: selectedAccordionIndex === 0 ? 'block' : 'none',
                }}
              >
                <TableCell colSpan={2}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  minus repellat iste ipsam repudiandae animi dolore quidem. Ea
                  inventore minima libero, quam cumque molestiae deleniti neque,
                  totam dolores, ab quae?
                </TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>
                  Preauthorization &amp; Clinical Guidelines
                </TableCell>
                <TableCell>
                  <img
                    src={selectedAccordionIndex === 1 ? upIcon : downIcon}
                    onClick={() =>
                      setSelectedAccordionIndex(
                        selectedAccordionIndex == 1 ? -1 : 1
                      )
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow
                style={{
                  display: selectedAccordionIndex === 1 ? 'block' : 'none',
                }}
              >
                <TableCell colSpan={2}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  minus repellat iste ipsam repudiandae animi dolore quidem. Ea
                  inventore minima libero, quam cumque molestiae deleniti neque,
                  totam dolores, ab quae?
                </TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>High Risk Medications</TableCell>
                <TableCell>
                  <img
                    src={selectedAccordionIndex === 2 ? upIcon : downIcon}
                    onClick={() =>
                      setSelectedAccordionIndex(
                        selectedAccordionIndex == 2 ? -1 : 2
                      )
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow
                style={{
                  display: selectedAccordionIndex === 2 ? 'block' : 'none',
                }}
              >
                <TableCell colSpan={2}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  minus repellat iste ipsam repudiandae animi dolore quidem. Ea
                  inventore minima libero, quam cumque molestiae deleniti neque,
                  totam dolores, ab quae?
                </TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCell>Prescription Drug Safety</TableCell>
                <TableCell>
                  <img
                    src={selectedAccordionIndex === 3 ? upIcon : downIcon}
                    onClick={() =>
                      setSelectedAccordionIndex(
                        selectedAccordionIndex == 3 ? -1 : 3
                      )
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow
                style={{
                  display: selectedAccordionIndex === 3 ? 'block' : 'none',
                }}
              >
                <TableCell colSpan={2}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  minus repellat iste ipsam repudiandae animi dolore quidem. Ea
                  inventore minima libero, quam cumque molestiae deleniti neque,
                  totam dolores, ab quae?
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </div>
  )
}
