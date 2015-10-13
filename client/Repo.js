/* @flow */

import { Repo } from './types'
import _, { times } from 'lodash'

const ids = {}
function nextId (key) {
  ids[key] = ids[key] || 1
  return ids[key]++
}

function dummyStep () {
  return {
    slides: [{
      text: 'Dette flashkort indeholder noget afgrænset info om flygtninge og EU. Lorem ipsum dolor sit amet, ea eos putent platonem, nec doctus mandamus scripserit id. Alia epicuri scribentur ei sit.'
    }, {
      text: 'How about those shampoo bottles, eh? I mean, what the fudge? You know? No?'
    }],
    question: {
      id: nextId('question'),
      text: 'Hvornår giver en mellemstatslig samarbejdsaftale EU lov til at påvirke dansk lovgivning direkte?',
      answers: [{
        id: nextId('answer'),
        text: 'I tilfælde af større kriser (naturkatastrofer, borgerkrig eller lignende).'
      }, {
        id: nextId('answer'),
        text: 'Mellemstatslige samarbejdsaftaler giver aldrig EU lov til direkte påvirkning.'
      }, {
        id: nextId('answer'),
        text: 'I alle tilfælde. Med mindre Folketinget beslutter at afholde en folkeafstemning.'
      }],
      correct_answer: 1
    }
  }
}

function dummySteps () {
  return times(2).map(dummyStep)
}

const repo: Repo = {
  categories: [{
    id: nextId('category'),
    title: 'Indvandrere',
    type: 'migrants',
    steps: dummySteps()
  }, {
    id: nextId('category'),
    title: 'Politi',
    type: 'police',
    steps: dummySteps()
  }, {
    id: nextId('category'),
    title: 'Lov',
    type: 'justice',
    steps: dummySteps()
  }, {
    id: nextId('category'),
    title: 'Erhverv',
    type: 'business',
    steps: dummySteps()
  }, {
    id: nextId('category'),
    title: 'EU',
    type: 'eu',
    steps: dummySteps()
  }, {
    id: nextId('category'),
    title: 'Familie',
    type: 'family',
    steps: dummySteps()
  }]
}

export function find (q: string) {
  return _.find(repo.categories, q)
}

export default repo
