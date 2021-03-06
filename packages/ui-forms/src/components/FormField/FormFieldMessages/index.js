/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import themeable from '@instructure/ui-themeable'
import { omitProps } from '@instructure/ui-utils/lib/react/passthroughProps'

import styles from './styles.css'
import theme from './theme'

import FormPropTypes from '../../../utils/FormPropTypes'
import FormFieldMessage from '../FormFieldMessage'

/**
---
parent: FormField
---

A FormFieldMessages component

```js
---
example: true
---
<FormFieldMessages messages={[
  { text: 'Invalid name', type: 'error' },
  { text: 'Good job!', type: 'success' },
  { text: 'Full name, first and last', type: 'hint' },
]} />
```
**/
@themeable(theme, styles)
export default class FormFieldMessages extends Component {
  static propTypes = {
    /**
    * object with shape: `{
    * text: PropTypes.string,
    * type: PropTypes.oneOf(['error', 'hint', 'success', 'screenreader-only'])
    *   }`
    */
    messages: PropTypes.arrayOf(FormPropTypes.message)
  }

  render () {
    const {messages} = this.props
    return messages && messages.length > 0 ? (
      <span className={styles.root} {...omitProps(this.props, FormFieldMessages.propTypes)}>
        {
          messages.map((msg, i) => {
            return (
              <span key={`error${i}`} className={styles.message}>
                <FormFieldMessage variant={msg.type}>
                  {msg.text}
                </FormFieldMessage>
              </span>
            )
          })
        }
      </span>
    ) : null
  }
}
