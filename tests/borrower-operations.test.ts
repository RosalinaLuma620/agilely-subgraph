import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AGLStakingAddressChanged } from "../generated/schema"
import { AGLStakingAddressChanged as AGLStakingAddressChangedEvent } from "../generated/BorrowerOperations/BorrowerOperations"
import { handleAGLStakingAddressChanged } from "../src/borrower-operations"
import { createAGLStakingAddressChangedEvent } from "./borrower-operations-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _aglStakingAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAGLStakingAddressChangedEvent = createAGLStakingAddressChangedEvent(
      _aglStakingAddress
    )
    handleAGLStakingAddressChanged(newAGLStakingAddressChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AGLStakingAddressChanged created and stored", () => {
    assert.entityCount("AGLStakingAddressChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AGLStakingAddressChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_aglStakingAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
