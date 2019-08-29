import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import queryString from 'query-string'

import plans from './data/plans.json'

import './styles.css'

import Theme from './theme'
import PlanDetail from './plan-detail'

// https://www.figma.com/file/J9Gdebpcb3grmnjchfc3Rm9F/Simplete-Website?node-id=996%3A10436

const useStyles = makeStyles(theme => ({
  topButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    boxSizing: 'border-box',
    textTransform: 'none',
  },
  button: {
    textTransform: 'none',
    margin: theme.spacing(2),
    marginLeft: 0,
    boxShadow: 'none',
    border: '1px solid #e3e3e3',
  },
  table: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    boxSizing: 'border-box',
  },
  tableRow: {
    width: '100%',
    overflowX: 'auto',
    boxSizing: 'border-box',
  },
  specialNote: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
  },
  cardHeader: {
    backgroundColor: '#572C80',
    padding: theme.spacing(3),
    color: '#ffffff',
  },
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow: 'none',
    border: '1px solid #e3e3e3',
  },
  note: {
    fontFamily: 'museo_sans100',
  },
}))

function getPlan() {
  const q = queryString.parse(window.location.search)
  return plans.find(plan => q.plan === plan.ID)
}

function getShopView() {
  const q = queryString.parse(window.location.search)
  return q.page
}

export default function PlanDetails({}) {
  const classes = useStyles()
  const plan = getPlan()

  return (
    <Theme>
      {plan ? (
        <PlanDetail classes={classes} plan={plan} shopView={getShopView()} />
      ) : (
        'loading'
      )}
    </Theme>
  )
}
