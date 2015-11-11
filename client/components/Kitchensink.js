import React, { Component, PropTypes } from 'react'

import Repo from '../Repo'
import { connect } from 'react-redux'

import Button from './Button'
import PageTitle, { PreHeading } from './PageTitle'
import Progressbar from './Progressbar'
import Copy from './Copy'
import MainNavigation from './MainNavigation'
import SectionTitle from './SectionTitle'
import PointLogEntry from './PointLogEntry'
import CardNavigation from './CardNavigation'
import { Tiles, Tile } from './Tiles'
import CategoryHeader from './CategoryHeader'
import Start from './Start'
import Done from './Done'
import ZeroPointsMessage from './ZeroPointsMessage'
import Deck from './Deck'
import Card from './Card'
import Toggle from './Toggle'

import '../scss/Kitchensink.scss'

@connect(state => ({ progress: state.progress }))
export default class Kitchensink extends Component {
  static propTypes = {
    progress: PropTypes.object.isRequired
  }

  render () {
    const { progress } = this.props
    const categories = Repo.categories

    return (
      <div className='Kitchensink'>
        <PageTitle type='boxed'>Kitchensink</PageTitle>
        <SectionTitle>Buttons</SectionTitle>
        <Copy>
          <p><Button type='small'>Small button</Button></p>
          <p><Button>Default Button</Button></p>
          <p><Button disabled>Disabled button</Button></p>
          <p><Button type='red'>Red button</Button></p>
          <p><Button type='yellow darkShadow'>Yellow button</Button></p>
          <p><Button type='light'>Light button</Button></p>
          <p><Button type='shadow'>Default with shadow</Button></p>
          <p><Button type='red darkShadow'>Red with dark shadow</Button></p>
          <p><Button type='shadow fullWidth'>Full width with shadow</Button></p>
          <p><Button type='rightArrowAtRight'>Button with an arrow</Button></p>
          <p><Button type='rightArrowAtRight' disabled>Button with an arrow</Button></p>
        </Copy>

        <SectionTitle>Headings</SectionTitle>
        <PageTitle>Page title</PageTitle>
        <PageTitle type='shadow'>Page title with shadow</PageTitle>
        <PageTitle type='boxed'>Boxed page title</PageTitle>
        <PageTitle type='boxed shadow'>Boxed page title with shadow</PageTitle>
        <PageTitle type='small'>Small page title</PageTitle>
        <PageTitle type='small centered'>
          <PreHeading>This is a pre-heading with a</PreHeading>
          <h1>Small centered page title</h1>
        </PageTitle>

        <SectionTitle>Progress bars</SectionTitle>
        <Progressbar percent={20} />
        <Progressbar percent={80} type='dimmed' />
        <Progressbar percent={40} type='small' />
        <Progressbar percent={70} type='small dimmed' />

        <SectionTitle>Main navigation</SectionTitle>
        <MainNavigation currentPath='/learn' progress={{completedStepIds: [], points: 666}} />

        <SectionTitle>Zero points message</SectionTitle>
        <ZeroPointsMessage />

        <SectionTitle>Point log entry</SectionTitle>
        <PointLogEntry type='1' points={10} terms={['abe']}>for at lære om...</PointLogEntry>
        <PointLogEntry type='2' points={20} terms={['abe']}>for at lære om...</PointLogEntry>
        <PointLogEntry type='3' points={30} terms={['abe']}>for at lære om...</PointLogEntry>
        <PointLogEntry type='4' points={40} terms={['abe']}>for at lære om...</PointLogEntry>
        <PointLogEntry type='5' points={50} terms={['abe']}>for at lære alt om Erhverv.</PointLogEntry>

        <SectionTitle>Card navigation</SectionTitle>
        <CardNavigation page={2} total={3} />

        <SectionTitle>Tiles</SectionTitle>
        <Tiles>
          {categories.map(c => (
            <Tile key={c.id} category={c} progress={progress} />
          ))}
        </Tiles>

        <SectionTitle>Category Headers</SectionTitle>
        {categories.map(c => (
          <CategoryHeader key={c.id} category={c} />
        ))}

        <SectionTitle>Start screen</SectionTitle>
        <Start disableRedirect />

        <SectionTitle>The end</SectionTitle>
        <Done />

        <SectionTitle>Deck</SectionTitle>
        <Deck cards={['1', '2', '3']} />

        <SectionTitle>Card</SectionTitle>
        <Card text='Lorem ipsumz' />

        <SectionTitle>Toggle</SectionTitle>
        <Toggle enabled={true}>Historiske begivenheder</Toggle>
        <Toggle state='off'>Retsforbeholdet</Toggle>
      </div>
    )
  }
}
