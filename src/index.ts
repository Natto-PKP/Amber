import dotenv from 'dotenv';
dotenv.config();

/** Sucrose */
import { Sucrose } from './structures/sucrose';

new Sucrose({ intents: (1 << 0) | (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4) | (1 << 8) | (1 << 9) | (1 << 10), partials: ['CHANNEL'] });
