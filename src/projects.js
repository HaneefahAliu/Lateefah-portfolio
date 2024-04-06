import ImmersiveLab from '../src/assets/images/IL.png';
import CancerCare from '../src/assets/images/CC.png';
import VoiceIt from '../src/assets/images/VI.png';
import Homely from '../src/assets/images/Homely.png';
import GameBoard from '../src/assets/images/GB.png';

import GB from './pages/gameboard'

export const projects = [
    {
        id: '1',
        route: 'immersive-lab',
        image: ImmersiveLab,
        title: 'Immersive Labs',
        tags: 'VISUAL DESIGN, PROTOTYPING',
        description: 'Improving human cyber capabilities through real-time measurement and training.',
    },
    {
        id: '2',
        route: 'cancer-care',
        image: CancerCare,
        title: 'Cancer Care',
        tags: 'UX DESIGN, RESEARCH, PROTOTYPING, TESTING',
        description: 'Aiding health management for Cancer patients.',
    },
    {
        id: '3',
        route: 'voice-it',
        image: VoiceIt,
        title: 'Voice It',
        tags: 'UX DESIGN, RESEARCH, PROTOTYPING, TESTING',
        description: 'Speech Interaction as an input method can be used to used to support design work.',
    },
    {
        id: '4',
        route: 'homely',
        image: Homely,
        title: 'Homely',
        tags: 'VISUAL DESIGN, PROTOTYPING',
        description: 'Bridging the gaps in facility management for renters and managers.',
    },
    {
        id: '5',
        route: 'game-board',
        image: GameBoard,
        title: 'Game Board',
        tags: 'UX DESIGN, RESEARCH, ACCESSIBILITY, TESTING',
        description: 'Addressing accessibility challenges in game design.',
    },
]