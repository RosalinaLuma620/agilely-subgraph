import {
    SystemSnapshotsUpdated as SystemSnapshotsUpdatedEvent,
    TroveLiquidated as TroveLiquidatedEvent,
    TroveSnapshotsUpdated as TroveSnapshotsUpdatedEvent,
    TroveUpdated as TroveUpdatedEvent,
} from "../generated/TroveManager/TroveManager"
import {
    SystemSnapshotsUpdated,
    TroveLiquidated,
    TroveUpdated,
    TroveSnapshotsUpdated
} from "../generated/schema"


export function handleTroveLiquidated(event: TroveLiquidatedEvent): void {
    let entity = new TroveLiquidated(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity._asset = event.params._asset
    entity._borrower = event.params._borrower
    entity._debt = event.params._debt
    entity._coll = event.params._coll
    entity.operation = event.params._operation

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
}


export function handleSystemSnapshotsUpdated(
    event: SystemSnapshotsUpdatedEvent
): void {
    let entity = new SystemSnapshotsUpdated(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity._asset = event.params._asset
    entity._totalStakesSnapshot = event.params._totalStakesSnapshot
    entity._totalCollateralSnapshot = event.params._totalCollateralSnapshot

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
}

export function handleTroveSnapshotsUpdated(
    event: TroveSnapshotsUpdatedEvent
): void {
    let entity = new TroveSnapshotsUpdated(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity._asset = event.params._asset
    entity._L_ETH = event.params._L_ETH
    entity._L_USDADebt = event.params._L_USDADebt

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
}

export function handleTroveUpdated(event: TroveUpdatedEvent): void {
    let entity = new TroveUpdated(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity._asset = event.params._asset
    entity._borrower = event.params._borrower
    entity._debt = event.params._debt
    entity._coll = event.params._coll
    entity.stake = event.params._stake
    entity.operation = event.params._operation

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
}
