import { Request } from '@somedotone/ardor-ts';
import { AttestationResponse, CreateAttestationUncheckedParams, CreateIntermediateAttestationParams, CreateLeafAttestationParams, CreateRootAttestationParams, IAttestation, RevokeAttestationUncheckedParams, RevokeIntermediateAttestationParams, RevokeLeafAttestationParams, RevokeRootAttestationParams, UpdateIntermediateAttestationParams, UpdateLeafAttestationParams, UpdateRootAttestationParams } from '../types';
export default class AttestationHandler implements IAttestation {
    private request;
    constructor(request?: Request);
    createRootAttestation: (url: string, params: CreateRootAttestationParams) => Promise<AttestationResponse>;
    private createAttestation;
    private isNotRootAttestation;
    private checkOwnEntityAndState;
    private checkRootAttestation;
    private createAttestationTransaction;
    private getRecipient;
    createIntermediateAttestation: (url: string, params: CreateIntermediateAttestationParams) => Promise<AttestationResponse>;
    createLeafAttestation: (url: string, params: CreateLeafAttestationParams) => Promise<AttestationResponse>;
    createAttestationUnchecked: (url: string, params: CreateAttestationUncheckedParams) => Promise<AttestationResponse>;
    updateRootAttestation: (url: string, params: UpdateRootAttestationParams) => Promise<AttestationResponse>;
    private updateAttestation;
    private isEntityPermitted;
    private getEntityTypeName;
    private checkClaimantEntityAndState;
    private isDeprecationRequest;
    private getNewRecipient;
    private checkNewClaimantAccount;
    updateIntermediateAttestation: (url: string, params: UpdateIntermediateAttestationParams) => Promise<AttestationResponse>;
    updateLeafAttestation: (url: string, params: UpdateLeafAttestationParams) => Promise<AttestationResponse>;
    revokeRootAttestation: (url: string, params: RevokeRootAttestationParams) => Promise<AttestationResponse>;
    private revokeAttestation;
    private checkRevokeAttestation;
    private createRevokeTransaction;
    revokeIntermediateAttestation: (url: string, params: RevokeIntermediateAttestationParams) => Promise<AttestationResponse>;
    revokeLeafAttestation: (url: string, params: RevokeLeafAttestationParams) => Promise<AttestationResponse>;
    revokeAttestationUnchecked: (url: string, params: RevokeAttestationUncheckedParams) => Promise<AttestationResponse>;
}
