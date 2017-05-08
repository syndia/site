/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import Card from '../../Card'

/**
 * Module dependencies
 */
import {
  Checkbox,
  Fieldset,
  Label,
  Legend,
  SectionHeading,
  Select,
  Textarea,
} from '../index'

const Example = () => (
  <div>
    <p>
      The form fields components act as wrapper components to aid in componentizing CSS.
      Here is an example of all of the form fields components and their expected markup.
    </p>
    <p>
      The following form fields components are wrapped in Card components to demonstrate
      the SectionHeading component.
    </p>

    <Card>
      <SectionHeading>Form Section Heading</SectionHeading>

      <Fieldset>
        <Legend>Form Checkbox</Legend>
        <Label>
          <Checkbox id="comment_like_notification" name="comment_like_notification" />
          <span>Email me when someone Likes one of my comments.</span>
        </Label>
      </Fieldset>

      <Fieldset>
        <Label htmlFor="select">Form Select</Label>
        <Select id="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Select>
        <Select id="select-disabled" disabled>
          <option>Disabled</option>
        </Select>
        <br />
        <Select id="select-error" isError>
          <option>Error</option>
        </Select>
      </Fieldset>
    </Card>

    <Card>
      <Fieldset>
        <Label htmlFor="textarea">Form TextArea</Label>
        <Textarea name="textarea" id="textarea" placeholder="Placeholder text..." />
      </Fieldset>
    </Card>
  </div>
)

export default Example
