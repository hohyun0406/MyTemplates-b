import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Conversation.module.css';
import { ImageIcon } from './ImageIcon.js';
import { MicIcon } from './MicIcon.js';
import { PhoneIcon } from './PhoneIcon.js';
import { SmileIcon } from './SmileIcon.js';
import { VideoIcon } from './VideoIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 3:330 */
export const Conversation: FC<Props> = memo(function Conversation(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.reply}>
        <div className={classes.label}>Enter your message</div>
        <div className={classes.mic}>
          <MicIcon className={classes.icon} />
        </div>
        <div className={classes.smile}>
          <SmileIcon className={classes.icon2} />
        </div>
        <div className={classes.image}>
          <ImageIcon className={classes.icon3} />
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.bubble}>
          <div className={classes.frame2610366}>
            <div className={classes.noHonestlyIMThinkingOfACareerP}>No honestly I’m thinking of a career pivot</div>
          </div>
          <div className={classes.frame2610367}>
            <div className={classes.thisIsTheMainChatTemplate}>This is the main chat template</div>
          </div>
        </div>
        <div className={classes.date}>Nov 30, 2023, 9:41 AM</div>
        <div className={classes.bubbles}>
          <div className={classes.frame26103662}>
            <div className={classes.oh}>Oh?</div>
          </div>
          <div className={classes.frame26103672}>
            <div className={classes.cool}>Cool</div>
          </div>
          <div className={classes.frame2610369}>
            <div className={classes.howDoesItWork}>How does it work?</div>
          </div>
        </div>
        <div className={classes.bubbles2}>
          <div className={classes.frame26103663}>
            <div className={classes.simple}>Simple</div>
          </div>
          <div className={classes.frame26103673}>
            <div className={classes.youJustEditAnyTextToTypeInTheC}>
              You just edit any text to type in the conversation you want to show, and delete any bubbles you don’t want
              to use
            </div>
          </div>
          <div className={classes.frame26103692}>
            <div className={classes.boom}>Boom</div>
          </div>
        </div>
        <div className={classes.bubbles3}>
          <div className={classes.frame26103674}>
            <div className={classes.hmmm}>Hmmm</div>
          </div>
          <div className={classes.frame26103693}>
            <div className={classes.iThinkIGetIt}>I think I get it</div>
          </div>
          <div className={classes.frame2610370}>
            <div className={classes.willHeadToTheHelpCenterIfIHave}>
              Will head to the Help Center if I have more questions tho
            </div>
          </div>
        </div>
      </div>
      <div className={classes.chatHeader}>
        <div className={classes.person}>
          <div className={classes.avatar}>
            <div className={classes.rectangle1}></div>
          </div>
          <div className={classes.text}>
            <div className={classes.helenaHills}>Helena Hills</div>
            <div className={classes.active20mAgo}>Active 20m ago</div>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.phone}>
            <PhoneIcon className={classes.icon4} />
          </div>
          <div className={classes.video}>
            <VideoIcon className={classes.icon5} />
          </div>
        </div>
      </div>
    </div>
  );
});
