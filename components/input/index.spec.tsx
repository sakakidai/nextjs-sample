import {render, screen, RenderResult} from '@testing-library/react'
import { Input } from './index'

describe('Input', () => {
  let renderResult: RenderResult;

  // テストケース実行前
  beforeEach(() => {
    renderResult = render(
      <Input id="username" label="Username" />
    )
  })

  // テストケース事項後
  afterEach(() => {
    renderResult.unmount()
  })

  // テスト実行
  it('should empty in input on initial render', () => {
    const inputNode = screen.getByLabelText('Username')
    expect(inputNode).toHaveValue('')
  })
})
