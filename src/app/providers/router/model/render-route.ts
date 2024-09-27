import React from 'react'
import { Route } from 'react-router-dom'

import { buildTestId } from 'shared/utils/testing'

import { RenderRoute } from '../types'

export const renderRoute: RenderRoute = ({ item, testId }) => {
	return React.createElement(
		Route,
		{
			key: item.path,
			path: item.path,
			element: item.element
				? React.createElement(item.element, {
						testId: testId ? buildTestId(testId, item.testId) : item.testId,
				  })
				: undefined,
		},
		item.children
			? [item.children.map((child) => renderRoute({ item: child, testId }))]
			: undefined,
	)
}
