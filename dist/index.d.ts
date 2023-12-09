import _m0 from 'protobufjs/minimal';
import { Result } from 'neverthrow';
import { VerifyTypedDataParameters, LocalAccount as LocalAccount$1 } from 'viem';
import { Factory } from '@farcaster/fishery';
import { Signer as Signer$1 } from 'ethers';
import { Signer as Signer$2, TypedDataSigner as TypedDataSigner$1 } from '@ethersproject/abstract-signer';
import { LocalAccount } from 'viem/accounts';

declare enum UserNameType {
    USERNAME_TYPE_NONE = 0,
    USERNAME_TYPE_QNAME = 1,
    USERNAME_TYPE_ENS_L1 = 2
}
declare function userNameTypeFromJSON(object: any): UserNameType;
declare function userNameTypeToJSON(object: UserNameType): string;
interface UserNameProof {
    timestamp: number;
    name: Uint8Array;
    owner: Uint8Array;
    signature: Uint8Array;
    qid: number;
    type: UserNameType;
}
declare const UserNameProof: {
    encode(message: UserNameProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserNameProof;
    fromJSON(object: any): UserNameProof;
    toJSON(message: UserNameProof): unknown;
    create<I extends {
        timestamp?: number;
        name?: Uint8Array;
        owner?: Uint8Array;
        signature?: Uint8Array;
        qid?: number;
        type?: UserNameType;
    } & {
        timestamp?: number;
        name?: Uint8Array;
        owner?: Uint8Array;
        signature?: Uint8Array;
        qid?: number;
        type?: UserNameType;
    } & { [K in Exclude<keyof I, keyof UserNameProof>]: never; }>(base?: I | undefined): UserNameProof;
    fromPartial<I_1 extends {
        timestamp?: number;
        name?: Uint8Array;
        owner?: Uint8Array;
        signature?: Uint8Array;
        qid?: number;
        type?: UserNameType;
    } & {
        timestamp?: number;
        name?: Uint8Array;
        owner?: Uint8Array;
        signature?: Uint8Array;
        qid?: number;
        type?: UserNameType;
    } & { [K_1 in Exclude<keyof I_1, keyof UserNameProof>]: never; }>(object: I_1): UserNameProof;
};

/** Type of hashing scheme used to produce a digest of MessageData */
declare enum HashScheme {
    NONE = 0,
    /** BLAKE3 - Default scheme for hashing MessageData */
    BLAKE3 = 1
}
declare function hashSchemeFromJSON(object: any): HashScheme;
declare function hashSchemeToJSON(object: HashScheme): string;
/** Type of signature scheme used to sign the Message hash */
declare enum SignatureScheme {
    NONE = 0,
    /** ED25519 - Ed25519 signature (default) */
    ED25519 = 1,
    /** EIP712 - ECDSA signature using EIP-712 scheme */
    EIP712 = 2
}
declare function signatureSchemeFromJSON(object: any): SignatureScheme;
declare function signatureSchemeToJSON(object: SignatureScheme): string;
/** Type of the MessageBody */
declare enum MessageType {
    NONE = 0,
    /** CAST_ADD - Add a new Cast */
    CAST_ADD = 1,
    /** CAST_REMOVE - Remove an existing Cast */
    CAST_REMOVE = 2,
    /** REACTION_ADD - Add a Reaction to a Cast */
    REACTION_ADD = 3,
    /** REACTION_REMOVE - Remove a Reaction from a Cast */
    REACTION_REMOVE = 4,
    /** LINK_ADD - Add a new Link */
    LINK_ADD = 5,
    /** LINK_REMOVE - Remove an existing Link */
    LINK_REMOVE = 6,
    /** VERIFICATION_ADD_ETH_ADDRESS - Add a Verification of an Ethereum Address */
    VERIFICATION_ADD_ETH_ADDRESS = 7,
    /** VERIFICATION_REMOVE - Remove a Verification */
    VERIFICATION_REMOVE = 8,
    /**
     * USER_DATA_ADD - Deprecated
     *  MESSAGE_TYPE_SIGNER_ADD = 9; // Add a new Ed25519 key pair that signs messages for a user
     *  MESSAGE_TYPE_SIGNER_REMOVE = 10; // Remove an Ed25519 key pair that signs messages for a user
     */
    USER_DATA_ADD = 11,
    /** USERNAME_PROOF - Add or replace a username proof */
    USERNAME_PROOF = 12
}
declare function messageTypeFromJSON(object: any): MessageType;
declare function messageTypeToJSON(object: MessageType): string;
/** Openrealm network the message is intended for */
declare enum OpenrealmNetwork {
    NONE = 0,
    /** MAINNET - Public primary network */
    MAINNET = 1,
    /** TESTNET - Public test network */
    TESTNET = 2,
    /** DEVNET - Private test network */
    DEVNET = 3
}
declare function openrealmNetworkFromJSON(object: any): OpenrealmNetwork;
declare function openrealmNetworkToJSON(object: OpenrealmNetwork): string;
/** Type of UserData */
declare enum UserDataType {
    NONE = 0,
    /** PFP - Profile Picture for the user */
    PFP = 1,
    /** DISPLAY - Display Name for the user */
    DISPLAY = 2,
    /** BIO - Bio for the user */
    BIO = 3,
    /** URL - URL of the user */
    URL = 5,
    /** USERNAME - Preferred Name for the user */
    USERNAME = 6
}
declare function userDataTypeFromJSON(object: any): UserDataType;
declare function userDataTypeToJSON(object: UserDataType): string;
/** Type of Reaction */
declare enum ReactionType {
    NONE = 0,
    /** LIKE - Like the target cast */
    LIKE = 1,
    /** RECAST - Share target cast to the user's audience */
    RECAST = 2
}
declare function reactionTypeFromJSON(object: any): ReactionType;
declare function reactionTypeToJSON(object: ReactionType): string;
/**
 * A Message is a delta operation on the Openrealm network. The message protobuf is an envelope
 * that wraps a MessageData object and contains a hash and signature which can verify its authenticity.
 */
interface Message {
    /** Contents of the message */
    data: MessageData | undefined;
    /** Hash digest of data */
    hash: Uint8Array;
    /** Hash scheme that produced the hash digest */
    hashScheme: HashScheme;
    /** Signature of the hash digest */
    signature: Uint8Array;
    /** Signature scheme that produced the signature */
    signatureScheme: SignatureScheme;
    /** Public key or address of the key pair that produced the signature */
    signer: Uint8Array;
    /** MessageData serialized to bytes if using protobuf serialization other than ts-proto */
    dataBytes?: Uint8Array | undefined;
}
declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    create<I extends {
        data?: {
            type?: MessageType;
            qid?: number;
            timestamp?: number;
            network?: OpenrealmNetwork;
            castAddBody?: {
                embedsDeprecated?: string[];
                mentions?: number[];
                parentCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                parentUrl?: string | undefined;
                text?: string;
                mentionsPositions?: number[];
                embeds?: {
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                }[];
            } | undefined;
            castRemoveBody?: {
                targetHash?: Uint8Array;
            } | undefined;
            reactionBody?: {
                type?: ReactionType;
                targetCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                targetUrl?: string | undefined;
            } | undefined;
            verificationAddEthAddressBody?: {
                address?: Uint8Array;
                ethSignature?: Uint8Array;
                blockHash?: Uint8Array;
                verificationType?: number;
                chainId?: number;
            } | undefined;
            verificationRemoveBody?: {
                address?: Uint8Array;
            } | undefined;
            userDataBody?: {
                type?: UserDataType;
                value?: string;
            } | undefined;
            linkBody?: {
                type?: string;
                displayTimestamp?: number | undefined;
                targetQid?: number | undefined;
            } | undefined;
            usernameProofBody?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
        } | undefined;
        hash?: Uint8Array;
        hashScheme?: HashScheme;
        signature?: Uint8Array;
        signatureScheme?: SignatureScheme;
        signer?: Uint8Array;
        dataBytes?: Uint8Array | undefined;
    } & {
        data?: ({
            type?: MessageType;
            qid?: number;
            timestamp?: number;
            network?: OpenrealmNetwork;
            castAddBody?: {
                embedsDeprecated?: string[];
                mentions?: number[];
                parentCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                parentUrl?: string | undefined;
                text?: string;
                mentionsPositions?: number[];
                embeds?: {
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                }[];
            } | undefined;
            castRemoveBody?: {
                targetHash?: Uint8Array;
            } | undefined;
            reactionBody?: {
                type?: ReactionType;
                targetCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                targetUrl?: string | undefined;
            } | undefined;
            verificationAddEthAddressBody?: {
                address?: Uint8Array;
                ethSignature?: Uint8Array;
                blockHash?: Uint8Array;
                verificationType?: number;
                chainId?: number;
            } | undefined;
            verificationRemoveBody?: {
                address?: Uint8Array;
            } | undefined;
            userDataBody?: {
                type?: UserDataType;
                value?: string;
            } | undefined;
            linkBody?: {
                type?: string;
                displayTimestamp?: number | undefined;
                targetQid?: number | undefined;
            } | undefined;
            usernameProofBody?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
        } & {
            type?: MessageType;
            qid?: number;
            timestamp?: number;
            network?: OpenrealmNetwork;
            castAddBody?: ({
                embedsDeprecated?: string[];
                mentions?: number[];
                parentCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                parentUrl?: string | undefined;
                text?: string;
                mentionsPositions?: number[];
                embeds?: {
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                }[];
            } & {
                embedsDeprecated?: string[] & string[] & { [K in Exclude<keyof I["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                mentions?: number[] & number[] & { [K_1 in Exclude<keyof I["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                parentCastId?: ({
                    qid?: number;
                    hash?: Uint8Array;
                } & {
                    qid?: number;
                    hash?: Uint8Array;
                } & { [K_2 in Exclude<keyof I["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                parentUrl?: string | undefined;
                text?: string;
                mentionsPositions?: number[] & number[] & { [K_3 in Exclude<keyof I["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                embeds?: {
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                }[] & ({
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                } & {
                    url?: string | undefined;
                    castId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_4 in Exclude<keyof I["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_6 in Exclude<keyof I["data"]["castAddBody"]["embeds"], keyof {
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                }[]>]: never; };
            } & { [K_7 in Exclude<keyof I["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
            castRemoveBody?: ({
                targetHash?: Uint8Array;
            } & {
                targetHash?: Uint8Array;
            } & { [K_8 in Exclude<keyof I["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
            reactionBody?: ({
                type?: ReactionType;
                targetCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                targetUrl?: string | undefined;
            } & {
                type?: ReactionType;
                targetCastId?: ({
                    qid?: number;
                    hash?: Uint8Array;
                } & {
                    qid?: number;
                    hash?: Uint8Array;
                } & { [K_9 in Exclude<keyof I["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                targetUrl?: string | undefined;
            } & { [K_10 in Exclude<keyof I["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
            verificationAddEthAddressBody?: ({
                address?: Uint8Array;
                ethSignature?: Uint8Array;
                blockHash?: Uint8Array;
                verificationType?: number;
                chainId?: number;
            } & {
                address?: Uint8Array;
                ethSignature?: Uint8Array;
                blockHash?: Uint8Array;
                verificationType?: number;
                chainId?: number;
            } & { [K_11 in Exclude<keyof I["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
            verificationRemoveBody?: ({
                address?: Uint8Array;
            } & {
                address?: Uint8Array;
            } & { [K_12 in Exclude<keyof I["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
            userDataBody?: ({
                type?: UserDataType;
                value?: string;
            } & {
                type?: UserDataType;
                value?: string;
            } & { [K_13 in Exclude<keyof I["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
            linkBody?: ({
                type?: string;
                displayTimestamp?: number | undefined;
                targetQid?: number | undefined;
            } & {
                type?: string;
                displayTimestamp?: number | undefined;
                targetQid?: number | undefined;
            } & { [K_14 in Exclude<keyof I["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
            usernameProofBody?: ({
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & { [K_15 in Exclude<keyof I["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I["data"], keyof MessageData>]: never; }) | undefined;
        hash?: Uint8Array;
        hashScheme?: HashScheme;
        signature?: Uint8Array;
        signatureScheme?: SignatureScheme;
        signer?: Uint8Array;
        dataBytes?: Uint8Array | undefined;
    } & { [K_17 in Exclude<keyof I, keyof Message>]: never; }>(base?: I | undefined): Message;
    fromPartial<I_1 extends {
        data?: {
            type?: MessageType;
            qid?: number;
            timestamp?: number;
            network?: OpenrealmNetwork;
            castAddBody?: {
                embedsDeprecated?: string[];
                mentions?: number[];
                parentCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                parentUrl?: string | undefined;
                text?: string;
                mentionsPositions?: number[];
                embeds?: {
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                }[];
            } | undefined;
            castRemoveBody?: {
                targetHash?: Uint8Array;
            } | undefined;
            reactionBody?: {
                type?: ReactionType;
                targetCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                targetUrl?: string | undefined;
            } | undefined;
            verificationAddEthAddressBody?: {
                address?: Uint8Array;
                ethSignature?: Uint8Array;
                blockHash?: Uint8Array;
                verificationType?: number;
                chainId?: number;
            } | undefined;
            verificationRemoveBody?: {
                address?: Uint8Array;
            } | undefined;
            userDataBody?: {
                type?: UserDataType;
                value?: string;
            } | undefined;
            linkBody?: {
                type?: string;
                displayTimestamp?: number | undefined;
                targetQid?: number | undefined;
            } | undefined;
            usernameProofBody?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
        } | undefined;
        hash?: Uint8Array;
        hashScheme?: HashScheme;
        signature?: Uint8Array;
        signatureScheme?: SignatureScheme;
        signer?: Uint8Array;
        dataBytes?: Uint8Array | undefined;
    } & {
        data?: ({
            type?: MessageType;
            qid?: number;
            timestamp?: number;
            network?: OpenrealmNetwork;
            castAddBody?: {
                embedsDeprecated?: string[];
                mentions?: number[];
                parentCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                parentUrl?: string | undefined;
                text?: string;
                mentionsPositions?: number[];
                embeds?: {
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                }[];
            } | undefined;
            castRemoveBody?: {
                targetHash?: Uint8Array;
            } | undefined;
            reactionBody?: {
                type?: ReactionType;
                targetCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                targetUrl?: string | undefined;
            } | undefined;
            verificationAddEthAddressBody?: {
                address?: Uint8Array;
                ethSignature?: Uint8Array;
                blockHash?: Uint8Array;
                verificationType?: number;
                chainId?: number;
            } | undefined;
            verificationRemoveBody?: {
                address?: Uint8Array;
            } | undefined;
            userDataBody?: {
                type?: UserDataType;
                value?: string;
            } | undefined;
            linkBody?: {
                type?: string;
                displayTimestamp?: number | undefined;
                targetQid?: number | undefined;
            } | undefined;
            usernameProofBody?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
        } & {
            type?: MessageType;
            qid?: number;
            timestamp?: number;
            network?: OpenrealmNetwork;
            castAddBody?: ({
                embedsDeprecated?: string[];
                mentions?: number[];
                parentCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                parentUrl?: string | undefined;
                text?: string;
                mentionsPositions?: number[];
                embeds?: {
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                }[];
            } & {
                embedsDeprecated?: string[] & string[] & { [K_18 in Exclude<keyof I_1["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                mentions?: number[] & number[] & { [K_19 in Exclude<keyof I_1["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                parentCastId?: ({
                    qid?: number;
                    hash?: Uint8Array;
                } & {
                    qid?: number;
                    hash?: Uint8Array;
                } & { [K_20 in Exclude<keyof I_1["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                parentUrl?: string | undefined;
                text?: string;
                mentionsPositions?: number[] & number[] & { [K_21 in Exclude<keyof I_1["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                embeds?: {
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                }[] & ({
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                } & {
                    url?: string | undefined;
                    castId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_22 in Exclude<keyof I_1["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                } & { [K_23 in Exclude<keyof I_1["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_24 in Exclude<keyof I_1["data"]["castAddBody"]["embeds"], keyof {
                    url?: string | undefined;
                    castId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                }[]>]: never; };
            } & { [K_25 in Exclude<keyof I_1["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
            castRemoveBody?: ({
                targetHash?: Uint8Array;
            } & {
                targetHash?: Uint8Array;
            } & { [K_26 in Exclude<keyof I_1["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
            reactionBody?: ({
                type?: ReactionType;
                targetCastId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
                targetUrl?: string | undefined;
            } & {
                type?: ReactionType;
                targetCastId?: ({
                    qid?: number;
                    hash?: Uint8Array;
                } & {
                    qid?: number;
                    hash?: Uint8Array;
                } & { [K_27 in Exclude<keyof I_1["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                targetUrl?: string | undefined;
            } & { [K_28 in Exclude<keyof I_1["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
            verificationAddEthAddressBody?: ({
                address?: Uint8Array;
                ethSignature?: Uint8Array;
                blockHash?: Uint8Array;
                verificationType?: number;
                chainId?: number;
            } & {
                address?: Uint8Array;
                ethSignature?: Uint8Array;
                blockHash?: Uint8Array;
                verificationType?: number;
                chainId?: number;
            } & { [K_29 in Exclude<keyof I_1["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
            verificationRemoveBody?: ({
                address?: Uint8Array;
            } & {
                address?: Uint8Array;
            } & { [K_30 in Exclude<keyof I_1["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
            userDataBody?: ({
                type?: UserDataType;
                value?: string;
            } & {
                type?: UserDataType;
                value?: string;
            } & { [K_31 in Exclude<keyof I_1["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
            linkBody?: ({
                type?: string;
                displayTimestamp?: number | undefined;
                targetQid?: number | undefined;
            } & {
                type?: string;
                displayTimestamp?: number | undefined;
                targetQid?: number | undefined;
            } & { [K_32 in Exclude<keyof I_1["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
            usernameProofBody?: ({
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & { [K_33 in Exclude<keyof I_1["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
        } & { [K_34 in Exclude<keyof I_1["data"], keyof MessageData>]: never; }) | undefined;
        hash?: Uint8Array;
        hashScheme?: HashScheme;
        signature?: Uint8Array;
        signatureScheme?: SignatureScheme;
        signer?: Uint8Array;
        dataBytes?: Uint8Array | undefined;
    } & { [K_35 in Exclude<keyof I_1, keyof Message>]: never; }>(object: I_1): Message;
};
/**
 * A MessageData object contains properties common to all messages and wraps a body object which
 * contains properties specific to the MessageType.
 */
interface MessageData {
    /** Type of message contained in the body */
    type: MessageType;
    /** Openrealm ID of the user producing the message */
    qid: number;
    /** Openrealm epoch timestamp in seconds */
    timestamp: number;
    /** Openrealm network the message is intended for */
    network: OpenrealmNetwork;
    castAddBody?: CastAddBody | undefined;
    castRemoveBody?: CastRemoveBody | undefined;
    reactionBody?: ReactionBody | undefined;
    verificationAddEthAddressBody?: VerificationAddEthAddressBody | undefined;
    verificationRemoveBody?: VerificationRemoveBody | undefined;
    /** SignerAddBody signer_add_body = 11; // Deprecated */
    userDataBody?: UserDataBody | undefined;
    /** SignerRemoveBody signer_remove_body = 13; // Deprecated */
    linkBody?: LinkBody | undefined;
    usernameProofBody?: UserNameProof | undefined;
}
declare const MessageData: {
    encode(message: MessageData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageData;
    fromJSON(object: any): MessageData;
    toJSON(message: MessageData): unknown;
    create<I extends {
        type?: MessageType;
        qid?: number;
        timestamp?: number;
        network?: OpenrealmNetwork;
        castAddBody?: {
            embedsDeprecated?: string[];
            mentions?: number[];
            parentCastId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
            parentUrl?: string | undefined;
            text?: string;
            mentionsPositions?: number[];
            embeds?: {
                url?: string | undefined;
                castId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
            }[];
        } | undefined;
        castRemoveBody?: {
            targetHash?: Uint8Array;
        } | undefined;
        reactionBody?: {
            type?: ReactionType;
            targetCastId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
            targetUrl?: string | undefined;
        } | undefined;
        verificationAddEthAddressBody?: {
            address?: Uint8Array;
            ethSignature?: Uint8Array;
            blockHash?: Uint8Array;
            verificationType?: number;
            chainId?: number;
        } | undefined;
        verificationRemoveBody?: {
            address?: Uint8Array;
        } | undefined;
        userDataBody?: {
            type?: UserDataType;
            value?: string;
        } | undefined;
        linkBody?: {
            type?: string;
            displayTimestamp?: number | undefined;
            targetQid?: number | undefined;
        } | undefined;
        usernameProofBody?: {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } | undefined;
    } & {
        type?: MessageType;
        qid?: number;
        timestamp?: number;
        network?: OpenrealmNetwork;
        castAddBody?: ({
            embedsDeprecated?: string[];
            mentions?: number[];
            parentCastId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
            parentUrl?: string | undefined;
            text?: string;
            mentionsPositions?: number[];
            embeds?: {
                url?: string | undefined;
                castId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
            }[];
        } & {
            embedsDeprecated?: string[] & string[] & { [K in Exclude<keyof I["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
            mentions?: number[] & number[] & { [K_1 in Exclude<keyof I["castAddBody"]["mentions"], keyof number[]>]: never; };
            parentCastId?: ({
                qid?: number;
                hash?: Uint8Array;
            } & {
                qid?: number;
                hash?: Uint8Array;
            } & { [K_2 in Exclude<keyof I["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
            parentUrl?: string | undefined;
            text?: string;
            mentionsPositions?: number[] & number[] & { [K_3 in Exclude<keyof I["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
            embeds?: {
                url?: string | undefined;
                castId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
            }[] & ({
                url?: string | undefined;
                castId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
            } & {
                url?: string | undefined;
                castId?: ({
                    qid?: number;
                    hash?: Uint8Array;
                } & {
                    qid?: number;
                    hash?: Uint8Array;
                } & { [K_4 in Exclude<keyof I["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_6 in Exclude<keyof I["castAddBody"]["embeds"], keyof {
                url?: string | undefined;
                castId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
        castRemoveBody?: ({
            targetHash?: Uint8Array;
        } & {
            targetHash?: Uint8Array;
        } & { [K_8 in Exclude<keyof I["castRemoveBody"], "targetHash">]: never; }) | undefined;
        reactionBody?: ({
            type?: ReactionType;
            targetCastId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
            targetUrl?: string | undefined;
        } & {
            type?: ReactionType;
            targetCastId?: ({
                qid?: number;
                hash?: Uint8Array;
            } & {
                qid?: number;
                hash?: Uint8Array;
            } & { [K_9 in Exclude<keyof I["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
            targetUrl?: string | undefined;
        } & { [K_10 in Exclude<keyof I["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
        verificationAddEthAddressBody?: ({
            address?: Uint8Array;
            ethSignature?: Uint8Array;
            blockHash?: Uint8Array;
            verificationType?: number;
            chainId?: number;
        } & {
            address?: Uint8Array;
            ethSignature?: Uint8Array;
            blockHash?: Uint8Array;
            verificationType?: number;
            chainId?: number;
        } & { [K_11 in Exclude<keyof I["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
        verificationRemoveBody?: ({
            address?: Uint8Array;
        } & {
            address?: Uint8Array;
        } & { [K_12 in Exclude<keyof I["verificationRemoveBody"], "address">]: never; }) | undefined;
        userDataBody?: ({
            type?: UserDataType;
            value?: string;
        } & {
            type?: UserDataType;
            value?: string;
        } & { [K_13 in Exclude<keyof I["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
        linkBody?: ({
            type?: string;
            displayTimestamp?: number | undefined;
            targetQid?: number | undefined;
        } & {
            type?: string;
            displayTimestamp?: number | undefined;
            targetQid?: number | undefined;
        } & { [K_14 in Exclude<keyof I["linkBody"], keyof LinkBody>]: never; }) | undefined;
        usernameProofBody?: ({
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & { [K_15 in Exclude<keyof I["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, keyof MessageData>]: never; }>(base?: I | undefined): MessageData;
    fromPartial<I_1 extends {
        type?: MessageType;
        qid?: number;
        timestamp?: number;
        network?: OpenrealmNetwork;
        castAddBody?: {
            embedsDeprecated?: string[];
            mentions?: number[];
            parentCastId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
            parentUrl?: string | undefined;
            text?: string;
            mentionsPositions?: number[];
            embeds?: {
                url?: string | undefined;
                castId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
            }[];
        } | undefined;
        castRemoveBody?: {
            targetHash?: Uint8Array;
        } | undefined;
        reactionBody?: {
            type?: ReactionType;
            targetCastId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
            targetUrl?: string | undefined;
        } | undefined;
        verificationAddEthAddressBody?: {
            address?: Uint8Array;
            ethSignature?: Uint8Array;
            blockHash?: Uint8Array;
            verificationType?: number;
            chainId?: number;
        } | undefined;
        verificationRemoveBody?: {
            address?: Uint8Array;
        } | undefined;
        userDataBody?: {
            type?: UserDataType;
            value?: string;
        } | undefined;
        linkBody?: {
            type?: string;
            displayTimestamp?: number | undefined;
            targetQid?: number | undefined;
        } | undefined;
        usernameProofBody?: {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } | undefined;
    } & {
        type?: MessageType;
        qid?: number;
        timestamp?: number;
        network?: OpenrealmNetwork;
        castAddBody?: ({
            embedsDeprecated?: string[];
            mentions?: number[];
            parentCastId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
            parentUrl?: string | undefined;
            text?: string;
            mentionsPositions?: number[];
            embeds?: {
                url?: string | undefined;
                castId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
            }[];
        } & {
            embedsDeprecated?: string[] & string[] & { [K_17 in Exclude<keyof I_1["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
            mentions?: number[] & number[] & { [K_18 in Exclude<keyof I_1["castAddBody"]["mentions"], keyof number[]>]: never; };
            parentCastId?: ({
                qid?: number;
                hash?: Uint8Array;
            } & {
                qid?: number;
                hash?: Uint8Array;
            } & { [K_19 in Exclude<keyof I_1["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
            parentUrl?: string | undefined;
            text?: string;
            mentionsPositions?: number[] & number[] & { [K_20 in Exclude<keyof I_1["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
            embeds?: {
                url?: string | undefined;
                castId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
            }[] & ({
                url?: string | undefined;
                castId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
            } & {
                url?: string | undefined;
                castId?: ({
                    qid?: number;
                    hash?: Uint8Array;
                } & {
                    qid?: number;
                    hash?: Uint8Array;
                } & { [K_21 in Exclude<keyof I_1["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I_1["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_23 in Exclude<keyof I_1["castAddBody"]["embeds"], keyof {
                url?: string | undefined;
                castId?: {
                    qid?: number;
                    hash?: Uint8Array;
                } | undefined;
            }[]>]: never; };
        } & { [K_24 in Exclude<keyof I_1["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
        castRemoveBody?: ({
            targetHash?: Uint8Array;
        } & {
            targetHash?: Uint8Array;
        } & { [K_25 in Exclude<keyof I_1["castRemoveBody"], "targetHash">]: never; }) | undefined;
        reactionBody?: ({
            type?: ReactionType;
            targetCastId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
            targetUrl?: string | undefined;
        } & {
            type?: ReactionType;
            targetCastId?: ({
                qid?: number;
                hash?: Uint8Array;
            } & {
                qid?: number;
                hash?: Uint8Array;
            } & { [K_26 in Exclude<keyof I_1["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
            targetUrl?: string | undefined;
        } & { [K_27 in Exclude<keyof I_1["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
        verificationAddEthAddressBody?: ({
            address?: Uint8Array;
            ethSignature?: Uint8Array;
            blockHash?: Uint8Array;
            verificationType?: number;
            chainId?: number;
        } & {
            address?: Uint8Array;
            ethSignature?: Uint8Array;
            blockHash?: Uint8Array;
            verificationType?: number;
            chainId?: number;
        } & { [K_28 in Exclude<keyof I_1["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
        verificationRemoveBody?: ({
            address?: Uint8Array;
        } & {
            address?: Uint8Array;
        } & { [K_29 in Exclude<keyof I_1["verificationRemoveBody"], "address">]: never; }) | undefined;
        userDataBody?: ({
            type?: UserDataType;
            value?: string;
        } & {
            type?: UserDataType;
            value?: string;
        } & { [K_30 in Exclude<keyof I_1["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
        linkBody?: ({
            type?: string;
            displayTimestamp?: number | undefined;
            targetQid?: number | undefined;
        } & {
            type?: string;
            displayTimestamp?: number | undefined;
            targetQid?: number | undefined;
        } & { [K_31 in Exclude<keyof I_1["linkBody"], keyof LinkBody>]: never; }) | undefined;
        usernameProofBody?: ({
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & { [K_32 in Exclude<keyof I_1["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
    } & { [K_33 in Exclude<keyof I_1, keyof MessageData>]: never; }>(object: I_1): MessageData;
};
/** Adds metadata about a user */
interface UserDataBody {
    /** Type of metadata */
    type: UserDataType;
    /** Value of the metadata */
    value: string;
}
declare const UserDataBody: {
    encode(message: UserDataBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserDataBody;
    fromJSON(object: any): UserDataBody;
    toJSON(message: UserDataBody): unknown;
    create<I extends {
        type?: UserDataType;
        value?: string;
    } & {
        type?: UserDataType;
        value?: string;
    } & { [K in Exclude<keyof I, keyof UserDataBody>]: never; }>(base?: I | undefined): UserDataBody;
    fromPartial<I_1 extends {
        type?: UserDataType;
        value?: string;
    } & {
        type?: UserDataType;
        value?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof UserDataBody>]: never; }>(object: I_1): UserDataBody;
};
interface Embed {
    url?: string | undefined;
    castId?: CastId | undefined;
}
declare const Embed: {
    encode(message: Embed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Embed;
    fromJSON(object: any): Embed;
    toJSON(message: Embed): unknown;
    create<I extends {
        url?: string | undefined;
        castId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
    } & {
        url?: string | undefined;
        castId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K in Exclude<keyof I["castId"], keyof CastId>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Embed>]: never; }>(base?: I | undefined): Embed;
    fromPartial<I_1 extends {
        url?: string | undefined;
        castId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
    } & {
        url?: string | undefined;
        castId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K_2 in Exclude<keyof I_1["castId"], keyof CastId>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Embed>]: never; }>(object: I_1): Embed;
};
/** Adds a new Cast */
interface CastAddBody {
    /** URLs to be embedded in the cast */
    embedsDeprecated: string[];
    /** Qids mentioned in the cast */
    mentions: number[];
    /** Parent cast of the cast */
    parentCastId?: CastId | undefined;
    /** Parent URL */
    parentUrl?: string | undefined;
    /** Text of the cast */
    text: string;
    /** Positions of the mentions in the text */
    mentionsPositions: number[];
    /** URLs or cast ids to be embedded in the cast */
    embeds: Embed[];
}
declare const CastAddBody: {
    encode(message: CastAddBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CastAddBody;
    fromJSON(object: any): CastAddBody;
    toJSON(message: CastAddBody): unknown;
    create<I extends {
        embedsDeprecated?: string[];
        mentions?: number[];
        parentCastId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
        parentUrl?: string | undefined;
        text?: string;
        mentionsPositions?: number[];
        embeds?: {
            url?: string | undefined;
            castId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
        }[];
    } & {
        embedsDeprecated?: string[] & string[] & { [K in Exclude<keyof I["embedsDeprecated"], keyof string[]>]: never; };
        mentions?: number[] & number[] & { [K_1 in Exclude<keyof I["mentions"], keyof number[]>]: never; };
        parentCastId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K_2 in Exclude<keyof I["parentCastId"], keyof CastId>]: never; }) | undefined;
        parentUrl?: string | undefined;
        text?: string;
        mentionsPositions?: number[] & number[] & { [K_3 in Exclude<keyof I["mentionsPositions"], keyof number[]>]: never; };
        embeds?: {
            url?: string | undefined;
            castId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
        }[] & ({
            url?: string | undefined;
            castId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
        } & {
            url?: string | undefined;
            castId?: ({
                qid?: number;
                hash?: Uint8Array;
            } & {
                qid?: number;
                hash?: Uint8Array;
            } & { [K_4 in Exclude<keyof I["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["embeds"][number], keyof Embed>]: never; })[] & { [K_6 in Exclude<keyof I["embeds"], keyof {
            url?: string | undefined;
            castId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I, keyof CastAddBody>]: never; }>(base?: I | undefined): CastAddBody;
    fromPartial<I_1 extends {
        embedsDeprecated?: string[];
        mentions?: number[];
        parentCastId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
        parentUrl?: string | undefined;
        text?: string;
        mentionsPositions?: number[];
        embeds?: {
            url?: string | undefined;
            castId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
        }[];
    } & {
        embedsDeprecated?: string[] & string[] & { [K_8 in Exclude<keyof I_1["embedsDeprecated"], keyof string[]>]: never; };
        mentions?: number[] & number[] & { [K_9 in Exclude<keyof I_1["mentions"], keyof number[]>]: never; };
        parentCastId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K_10 in Exclude<keyof I_1["parentCastId"], keyof CastId>]: never; }) | undefined;
        parentUrl?: string | undefined;
        text?: string;
        mentionsPositions?: number[] & number[] & { [K_11 in Exclude<keyof I_1["mentionsPositions"], keyof number[]>]: never; };
        embeds?: {
            url?: string | undefined;
            castId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
        }[] & ({
            url?: string | undefined;
            castId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
        } & {
            url?: string | undefined;
            castId?: ({
                qid?: number;
                hash?: Uint8Array;
            } & {
                qid?: number;
                hash?: Uint8Array;
            } & { [K_12 in Exclude<keyof I_1["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I_1["embeds"][number], keyof Embed>]: never; })[] & { [K_14 in Exclude<keyof I_1["embeds"], keyof {
            url?: string | undefined;
            castId?: {
                qid?: number;
                hash?: Uint8Array;
            } | undefined;
        }[]>]: never; };
    } & { [K_15 in Exclude<keyof I_1, keyof CastAddBody>]: never; }>(object: I_1): CastAddBody;
};
/** Removes an existing Cast */
interface CastRemoveBody {
    /** Hash of the cast to remove */
    targetHash: Uint8Array;
}
declare const CastRemoveBody: {
    encode(message: CastRemoveBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CastRemoveBody;
    fromJSON(object: any): CastRemoveBody;
    toJSON(message: CastRemoveBody): unknown;
    create<I extends {
        targetHash?: Uint8Array;
    } & {
        targetHash?: Uint8Array;
    } & { [K in Exclude<keyof I, "targetHash">]: never; }>(base?: I | undefined): CastRemoveBody;
    fromPartial<I_1 extends {
        targetHash?: Uint8Array;
    } & {
        targetHash?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "targetHash">]: never; }>(object: I_1): CastRemoveBody;
};
/** Identifier used to look up a Cast */
interface CastId {
    /** Qid of the user who created the cast */
    qid: number;
    /** Hash of the cast */
    hash: Uint8Array;
}
declare const CastId: {
    encode(message: CastId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CastId;
    fromJSON(object: any): CastId;
    toJSON(message: CastId): unknown;
    create<I extends {
        qid?: number;
        hash?: Uint8Array;
    } & {
        qid?: number;
        hash?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof CastId>]: never; }>(base?: I | undefined): CastId;
    fromPartial<I_1 extends {
        qid?: number;
        hash?: Uint8Array;
    } & {
        qid?: number;
        hash?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, keyof CastId>]: never; }>(object: I_1): CastId;
};
/** Adds or removes a Reaction from a Cast */
interface ReactionBody {
    /** Type of reaction */
    type: ReactionType;
    /** CastId of the Cast to react to */
    targetCastId?: CastId | undefined;
    /** URL to react to */
    targetUrl?: string | undefined;
}
declare const ReactionBody: {
    encode(message: ReactionBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactionBody;
    fromJSON(object: any): ReactionBody;
    toJSON(message: ReactionBody): unknown;
    create<I extends {
        type?: ReactionType;
        targetCastId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
        targetUrl?: string | undefined;
    } & {
        type?: ReactionType;
        targetCastId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K in Exclude<keyof I["targetCastId"], keyof CastId>]: never; }) | undefined;
        targetUrl?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ReactionBody>]: never; }>(base?: I | undefined): ReactionBody;
    fromPartial<I_1 extends {
        type?: ReactionType;
        targetCastId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
        targetUrl?: string | undefined;
    } & {
        type?: ReactionType;
        targetCastId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K_2 in Exclude<keyof I_1["targetCastId"], keyof CastId>]: never; }) | undefined;
        targetUrl?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ReactionBody>]: never; }>(object: I_1): ReactionBody;
};
/** Adds a Verification of ownership of an Ethereum Address */
interface VerificationAddEthAddressBody {
    /** Ethereum address being verified */
    address: Uint8Array;
    /** Signature produced by the user's Ethereum address */
    ethSignature: Uint8Array;
    /** Hash of the latest Ethereum block when the signature was produced */
    blockHash: Uint8Array;
    /** Type of verification. 0 = EOA, 1 = contract */
    verificationType: number;
    /** 0 for EOA verifications, 1 or 10 for contract verifications */
    chainId: number;
}
declare const VerificationAddEthAddressBody: {
    encode(message: VerificationAddEthAddressBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationAddEthAddressBody;
    fromJSON(object: any): VerificationAddEthAddressBody;
    toJSON(message: VerificationAddEthAddressBody): unknown;
    create<I extends {
        address?: Uint8Array;
        ethSignature?: Uint8Array;
        blockHash?: Uint8Array;
        verificationType?: number;
        chainId?: number;
    } & {
        address?: Uint8Array;
        ethSignature?: Uint8Array;
        blockHash?: Uint8Array;
        verificationType?: number;
        chainId?: number;
    } & { [K in Exclude<keyof I, keyof VerificationAddEthAddressBody>]: never; }>(base?: I | undefined): VerificationAddEthAddressBody;
    fromPartial<I_1 extends {
        address?: Uint8Array;
        ethSignature?: Uint8Array;
        blockHash?: Uint8Array;
        verificationType?: number;
        chainId?: number;
    } & {
        address?: Uint8Array;
        ethSignature?: Uint8Array;
        blockHash?: Uint8Array;
        verificationType?: number;
        chainId?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof VerificationAddEthAddressBody>]: never; }>(object: I_1): VerificationAddEthAddressBody;
};
/** Removes a Verification of any type */
interface VerificationRemoveBody {
    /** Address of the Verification to remove */
    address: Uint8Array;
}
declare const VerificationRemoveBody: {
    encode(message: VerificationRemoveBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationRemoveBody;
    fromJSON(object: any): VerificationRemoveBody;
    toJSON(message: VerificationRemoveBody): unknown;
    create<I extends {
        address?: Uint8Array;
    } & {
        address?: Uint8Array;
    } & { [K in Exclude<keyof I, "address">]: never; }>(base?: I | undefined): VerificationRemoveBody;
    fromPartial<I_1 extends {
        address?: Uint8Array;
    } & {
        address?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never; }>(object: I_1): VerificationRemoveBody;
};
/** Adds or removes a Link */
interface LinkBody {
    /** Type of link, <= 8 characters */
    type: string;
    /** User-defined timestamp that preserves original timestamp when message.data.timestamp needs to be updated for compaction */
    displayTimestamp?: number | undefined;
    /** The qid the link relates to */
    targetQid?: number | undefined;
}
declare const LinkBody: {
    encode(message: LinkBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkBody;
    fromJSON(object: any): LinkBody;
    toJSON(message: LinkBody): unknown;
    create<I extends {
        type?: string;
        displayTimestamp?: number | undefined;
        targetQid?: number | undefined;
    } & {
        type?: string;
        displayTimestamp?: number | undefined;
        targetQid?: number | undefined;
    } & { [K in Exclude<keyof I, keyof LinkBody>]: never; }>(base?: I | undefined): LinkBody;
    fromPartial<I_1 extends {
        type?: string;
        displayTimestamp?: number | undefined;
        targetQid?: number | undefined;
    } & {
        type?: string;
        displayTimestamp?: number | undefined;
        targetQid?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LinkBody>]: never; }>(object: I_1): LinkBody;
};

declare enum GossipVersion {
    V1 = 0,
    V1_1 = 1
}
declare function gossipVersionFromJSON(object: any): GossipVersion;
declare function gossipVersionToJSON(object: GossipVersion): string;
interface GossipAddressInfo {
    address: string;
    family: number;
    port: number;
    dnsName: string;
}
declare const GossipAddressInfo: {
    encode(message: GossipAddressInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GossipAddressInfo;
    fromJSON(object: any): GossipAddressInfo;
    toJSON(message: GossipAddressInfo): unknown;
    create<I extends {
        address?: string;
        family?: number;
        port?: number;
        dnsName?: string;
    } & {
        address?: string;
        family?: number;
        port?: number;
        dnsName?: string;
    } & { [K in Exclude<keyof I, keyof GossipAddressInfo>]: never; }>(base?: I | undefined): GossipAddressInfo;
    fromPartial<I_1 extends {
        address?: string;
        family?: number;
        port?: number;
        dnsName?: string;
    } & {
        address?: string;
        family?: number;
        port?: number;
        dnsName?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof GossipAddressInfo>]: never; }>(object: I_1): GossipAddressInfo;
};
interface ContactInfoContentBody {
    gossipAddress: GossipAddressInfo | undefined;
    rpcAddress: GossipAddressInfo | undefined;
    excludedHashes: string[];
    count: number;
    hubVersion: string;
    network: OpenrealmNetwork;
    appVersion: string;
    timestamp: number;
}
declare const ContactInfoContentBody: {
    encode(message: ContactInfoContentBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContactInfoContentBody;
    fromJSON(object: any): ContactInfoContentBody;
    toJSON(message: ContactInfoContentBody): unknown;
    create<I extends {
        gossipAddress?: {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } | undefined;
        rpcAddress?: {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } | undefined;
        excludedHashes?: string[];
        count?: number;
        hubVersion?: string;
        network?: OpenrealmNetwork;
        appVersion?: string;
        timestamp?: number;
    } & {
        gossipAddress?: ({
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & { [K in Exclude<keyof I["gossipAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
        rpcAddress?: ({
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & { [K_1 in Exclude<keyof I["rpcAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
        excludedHashes?: string[] & string[] & { [K_2 in Exclude<keyof I["excludedHashes"], keyof string[]>]: never; };
        count?: number;
        hubVersion?: string;
        network?: OpenrealmNetwork;
        appVersion?: string;
        timestamp?: number;
    } & { [K_3 in Exclude<keyof I, keyof ContactInfoContentBody>]: never; }>(base?: I | undefined): ContactInfoContentBody;
    fromPartial<I_1 extends {
        gossipAddress?: {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } | undefined;
        rpcAddress?: {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } | undefined;
        excludedHashes?: string[];
        count?: number;
        hubVersion?: string;
        network?: OpenrealmNetwork;
        appVersion?: string;
        timestamp?: number;
    } & {
        gossipAddress?: ({
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & { [K_4 in Exclude<keyof I_1["gossipAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
        rpcAddress?: ({
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & { [K_5 in Exclude<keyof I_1["rpcAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
        excludedHashes?: string[] & string[] & { [K_6 in Exclude<keyof I_1["excludedHashes"], keyof string[]>]: never; };
        count?: number;
        hubVersion?: string;
        network?: OpenrealmNetwork;
        appVersion?: string;
        timestamp?: number;
    } & { [K_7 in Exclude<keyof I_1, keyof ContactInfoContentBody>]: never; }>(object: I_1): ContactInfoContentBody;
};
interface ContactInfoContent {
    gossipAddress: GossipAddressInfo | undefined;
    rpcAddress: GossipAddressInfo | undefined;
    excludedHashes: string[];
    count: number;
    hubVersion: string;
    network: OpenrealmNetwork;
    appVersion: string;
    timestamp: number;
    body: ContactInfoContentBody | undefined;
    /** Signature of the message digest */
    signature: Uint8Array;
    /** Public key of the peer that originated the contact info */
    signer: Uint8Array;
    /** Optional alternative serialization used for signing */
    dataBytes?: Uint8Array | undefined;
}
declare const ContactInfoContent: {
    encode(message: ContactInfoContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContactInfoContent;
    fromJSON(object: any): ContactInfoContent;
    toJSON(message: ContactInfoContent): unknown;
    create<I extends {
        gossipAddress?: {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } | undefined;
        rpcAddress?: {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } | undefined;
        excludedHashes?: string[];
        count?: number;
        hubVersion?: string;
        network?: OpenrealmNetwork;
        appVersion?: string;
        timestamp?: number;
        body?: {
            gossipAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            rpcAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            excludedHashes?: string[];
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
        } | undefined;
        signature?: Uint8Array;
        signer?: Uint8Array;
        dataBytes?: Uint8Array | undefined;
    } & {
        gossipAddress?: ({
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & { [K in Exclude<keyof I["gossipAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
        rpcAddress?: ({
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & { [K_1 in Exclude<keyof I["rpcAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
        excludedHashes?: string[] & string[] & { [K_2 in Exclude<keyof I["excludedHashes"], keyof string[]>]: never; };
        count?: number;
        hubVersion?: string;
        network?: OpenrealmNetwork;
        appVersion?: string;
        timestamp?: number;
        body?: ({
            gossipAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            rpcAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            excludedHashes?: string[];
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
        } & {
            gossipAddress?: ({
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & { [K_3 in Exclude<keyof I["body"]["gossipAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
            rpcAddress?: ({
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & { [K_4 in Exclude<keyof I["body"]["rpcAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
            excludedHashes?: string[] & string[] & { [K_5 in Exclude<keyof I["body"]["excludedHashes"], keyof string[]>]: never; };
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
        } & { [K_6 in Exclude<keyof I["body"], keyof ContactInfoContentBody>]: never; }) | undefined;
        signature?: Uint8Array;
        signer?: Uint8Array;
        dataBytes?: Uint8Array | undefined;
    } & { [K_7 in Exclude<keyof I, keyof ContactInfoContent>]: never; }>(base?: I | undefined): ContactInfoContent;
    fromPartial<I_1 extends {
        gossipAddress?: {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } | undefined;
        rpcAddress?: {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } | undefined;
        excludedHashes?: string[];
        count?: number;
        hubVersion?: string;
        network?: OpenrealmNetwork;
        appVersion?: string;
        timestamp?: number;
        body?: {
            gossipAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            rpcAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            excludedHashes?: string[];
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
        } | undefined;
        signature?: Uint8Array;
        signer?: Uint8Array;
        dataBytes?: Uint8Array | undefined;
    } & {
        gossipAddress?: ({
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & { [K_8 in Exclude<keyof I_1["gossipAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
        rpcAddress?: ({
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & {
            address?: string;
            family?: number;
            port?: number;
            dnsName?: string;
        } & { [K_9 in Exclude<keyof I_1["rpcAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
        excludedHashes?: string[] & string[] & { [K_10 in Exclude<keyof I_1["excludedHashes"], keyof string[]>]: never; };
        count?: number;
        hubVersion?: string;
        network?: OpenrealmNetwork;
        appVersion?: string;
        timestamp?: number;
        body?: ({
            gossipAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            rpcAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            excludedHashes?: string[];
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
        } & {
            gossipAddress?: ({
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & { [K_11 in Exclude<keyof I_1["body"]["gossipAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
            rpcAddress?: ({
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & { [K_12 in Exclude<keyof I_1["body"]["rpcAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
            excludedHashes?: string[] & string[] & { [K_13 in Exclude<keyof I_1["body"]["excludedHashes"], keyof string[]>]: never; };
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
        } & { [K_14 in Exclude<keyof I_1["body"], keyof ContactInfoContentBody>]: never; }) | undefined;
        signature?: Uint8Array;
        signer?: Uint8Array;
        dataBytes?: Uint8Array | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof ContactInfoContent>]: never; }>(object: I_1): ContactInfoContent;
};
interface PingMessageBody {
    pingOriginPeerId: Uint8Array;
    pingTimestamp: number;
}
declare const PingMessageBody: {
    encode(message: PingMessageBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PingMessageBody;
    fromJSON(object: any): PingMessageBody;
    toJSON(message: PingMessageBody): unknown;
    create<I extends {
        pingOriginPeerId?: Uint8Array;
        pingTimestamp?: number;
    } & {
        pingOriginPeerId?: Uint8Array;
        pingTimestamp?: number;
    } & { [K in Exclude<keyof I, keyof PingMessageBody>]: never; }>(base?: I | undefined): PingMessageBody;
    fromPartial<I_1 extends {
        pingOriginPeerId?: Uint8Array;
        pingTimestamp?: number;
    } & {
        pingOriginPeerId?: Uint8Array;
        pingTimestamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof PingMessageBody>]: never; }>(object: I_1): PingMessageBody;
};
interface AckMessageBody {
    pingOriginPeerId: Uint8Array;
    ackOriginPeerId: Uint8Array;
    pingTimestamp: number;
    ackTimestamp: number;
}
declare const AckMessageBody: {
    encode(message: AckMessageBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AckMessageBody;
    fromJSON(object: any): AckMessageBody;
    toJSON(message: AckMessageBody): unknown;
    create<I extends {
        pingOriginPeerId?: Uint8Array;
        ackOriginPeerId?: Uint8Array;
        pingTimestamp?: number;
        ackTimestamp?: number;
    } & {
        pingOriginPeerId?: Uint8Array;
        ackOriginPeerId?: Uint8Array;
        pingTimestamp?: number;
        ackTimestamp?: number;
    } & { [K in Exclude<keyof I, keyof AckMessageBody>]: never; }>(base?: I | undefined): AckMessageBody;
    fromPartial<I_1 extends {
        pingOriginPeerId?: Uint8Array;
        ackOriginPeerId?: Uint8Array;
        pingTimestamp?: number;
        ackTimestamp?: number;
    } & {
        pingOriginPeerId?: Uint8Array;
        ackOriginPeerId?: Uint8Array;
        pingTimestamp?: number;
        ackTimestamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof AckMessageBody>]: never; }>(object: I_1): AckMessageBody;
};
interface NetworkLatencyMessage {
    pingMessage?: PingMessageBody | undefined;
    ackMessage?: AckMessageBody | undefined;
}
declare const NetworkLatencyMessage: {
    encode(message: NetworkLatencyMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkLatencyMessage;
    fromJSON(object: any): NetworkLatencyMessage;
    toJSON(message: NetworkLatencyMessage): unknown;
    create<I extends {
        pingMessage?: {
            pingOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
        } | undefined;
        ackMessage?: {
            pingOriginPeerId?: Uint8Array;
            ackOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
            ackTimestamp?: number;
        } | undefined;
    } & {
        pingMessage?: ({
            pingOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
        } & {
            pingOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
        } & { [K in Exclude<keyof I["pingMessage"], keyof PingMessageBody>]: never; }) | undefined;
        ackMessage?: ({
            pingOriginPeerId?: Uint8Array;
            ackOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
            ackTimestamp?: number;
        } & {
            pingOriginPeerId?: Uint8Array;
            ackOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
            ackTimestamp?: number;
        } & { [K_1 in Exclude<keyof I["ackMessage"], keyof AckMessageBody>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof NetworkLatencyMessage>]: never; }>(base?: I | undefined): NetworkLatencyMessage;
    fromPartial<I_1 extends {
        pingMessage?: {
            pingOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
        } | undefined;
        ackMessage?: {
            pingOriginPeerId?: Uint8Array;
            ackOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
            ackTimestamp?: number;
        } | undefined;
    } & {
        pingMessage?: ({
            pingOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
        } & {
            pingOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
        } & { [K_3 in Exclude<keyof I_1["pingMessage"], keyof PingMessageBody>]: never; }) | undefined;
        ackMessage?: ({
            pingOriginPeerId?: Uint8Array;
            ackOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
            ackTimestamp?: number;
        } & {
            pingOriginPeerId?: Uint8Array;
            ackOriginPeerId?: Uint8Array;
            pingTimestamp?: number;
            ackTimestamp?: number;
        } & { [K_4 in Exclude<keyof I_1["ackMessage"], keyof AckMessageBody>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof NetworkLatencyMessage>]: never; }>(object: I_1): NetworkLatencyMessage;
};
interface GossipMessage {
    message?: Message | undefined;
    /**
     * Deprecated
     *  IdRegistryEvent id_registry_event = 2;
     */
    contactInfoContent?: ContactInfoContent | undefined;
    networkLatencyMessage?: NetworkLatencyMessage | undefined;
    topics: string[];
    peerId: Uint8Array;
    version: GossipVersion;
}
declare const GossipMessage: {
    encode(message: GossipMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GossipMessage;
    fromJSON(object: any): GossipMessage;
    toJSON(message: GossipMessage): unknown;
    create<I extends {
        message?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
        contactInfoContent?: {
            gossipAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            rpcAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            excludedHashes?: string[];
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
            body?: {
                gossipAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                rpcAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                excludedHashes?: string[];
                count?: number;
                hubVersion?: string;
                network?: OpenrealmNetwork;
                appVersion?: string;
                timestamp?: number;
            } | undefined;
            signature?: Uint8Array;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
        networkLatencyMessage?: {
            pingMessage?: {
                pingOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
            } | undefined;
            ackMessage?: {
                pingOriginPeerId?: Uint8Array;
                ackOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
                ackTimestamp?: number;
            } | undefined;
        } | undefined;
        topics?: string[];
        peerId?: Uint8Array;
        version?: GossipVersion;
    } & {
        message?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K in Exclude<keyof I["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_1 in Exclude<keyof I["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_2 in Exclude<keyof I["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_3 in Exclude<keyof I["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_4 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_6 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_7 in Exclude<keyof I["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_8 in Exclude<keyof I["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_9 in Exclude<keyof I["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_10 in Exclude<keyof I["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_11 in Exclude<keyof I["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_12 in Exclude<keyof I["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_13 in Exclude<keyof I["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_14 in Exclude<keyof I["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_15 in Exclude<keyof I["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["message"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_17 in Exclude<keyof I["message"], keyof Message>]: never; }) | undefined;
        contactInfoContent?: ({
            gossipAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            rpcAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            excludedHashes?: string[];
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
            body?: {
                gossipAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                rpcAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                excludedHashes?: string[];
                count?: number;
                hubVersion?: string;
                network?: OpenrealmNetwork;
                appVersion?: string;
                timestamp?: number;
            } | undefined;
            signature?: Uint8Array;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            gossipAddress?: ({
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & { [K_18 in Exclude<keyof I["contactInfoContent"]["gossipAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
            rpcAddress?: ({
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & { [K_19 in Exclude<keyof I["contactInfoContent"]["rpcAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
            excludedHashes?: string[] & string[] & { [K_20 in Exclude<keyof I["contactInfoContent"]["excludedHashes"], keyof string[]>]: never; };
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
            body?: ({
                gossipAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                rpcAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                excludedHashes?: string[];
                count?: number;
                hubVersion?: string;
                network?: OpenrealmNetwork;
                appVersion?: string;
                timestamp?: number;
            } & {
                gossipAddress?: ({
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } & {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } & { [K_21 in Exclude<keyof I["contactInfoContent"]["body"]["gossipAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
                rpcAddress?: ({
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } & {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } & { [K_22 in Exclude<keyof I["contactInfoContent"]["body"]["rpcAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
                excludedHashes?: string[] & string[] & { [K_23 in Exclude<keyof I["contactInfoContent"]["body"]["excludedHashes"], keyof string[]>]: never; };
                count?: number;
                hubVersion?: string;
                network?: OpenrealmNetwork;
                appVersion?: string;
                timestamp?: number;
            } & { [K_24 in Exclude<keyof I["contactInfoContent"]["body"], keyof ContactInfoContentBody>]: never; }) | undefined;
            signature?: Uint8Array;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_25 in Exclude<keyof I["contactInfoContent"], keyof ContactInfoContent>]: never; }) | undefined;
        networkLatencyMessage?: ({
            pingMessage?: {
                pingOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
            } | undefined;
            ackMessage?: {
                pingOriginPeerId?: Uint8Array;
                ackOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
                ackTimestamp?: number;
            } | undefined;
        } & {
            pingMessage?: ({
                pingOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
            } & {
                pingOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
            } & { [K_26 in Exclude<keyof I["networkLatencyMessage"]["pingMessage"], keyof PingMessageBody>]: never; }) | undefined;
            ackMessage?: ({
                pingOriginPeerId?: Uint8Array;
                ackOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
                ackTimestamp?: number;
            } & {
                pingOriginPeerId?: Uint8Array;
                ackOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
                ackTimestamp?: number;
            } & { [K_27 in Exclude<keyof I["networkLatencyMessage"]["ackMessage"], keyof AckMessageBody>]: never; }) | undefined;
        } & { [K_28 in Exclude<keyof I["networkLatencyMessage"], keyof NetworkLatencyMessage>]: never; }) | undefined;
        topics?: string[] & string[] & { [K_29 in Exclude<keyof I["topics"], keyof string[]>]: never; };
        peerId?: Uint8Array;
        version?: GossipVersion;
    } & { [K_30 in Exclude<keyof I, keyof GossipMessage>]: never; }>(base?: I | undefined): GossipMessage;
    fromPartial<I_1 extends {
        message?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
        contactInfoContent?: {
            gossipAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            rpcAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            excludedHashes?: string[];
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
            body?: {
                gossipAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                rpcAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                excludedHashes?: string[];
                count?: number;
                hubVersion?: string;
                network?: OpenrealmNetwork;
                appVersion?: string;
                timestamp?: number;
            } | undefined;
            signature?: Uint8Array;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
        networkLatencyMessage?: {
            pingMessage?: {
                pingOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
            } | undefined;
            ackMessage?: {
                pingOriginPeerId?: Uint8Array;
                ackOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
                ackTimestamp?: number;
            } | undefined;
        } | undefined;
        topics?: string[];
        peerId?: Uint8Array;
        version?: GossipVersion;
    } & {
        message?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K_31 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_32 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_33 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_34 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_35 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_36 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_37 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_38 in Exclude<keyof I_1["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_39 in Exclude<keyof I_1["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_40 in Exclude<keyof I_1["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_41 in Exclude<keyof I_1["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_42 in Exclude<keyof I_1["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_43 in Exclude<keyof I_1["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_44 in Exclude<keyof I_1["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_45 in Exclude<keyof I_1["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_46 in Exclude<keyof I_1["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_47 in Exclude<keyof I_1["message"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_48 in Exclude<keyof I_1["message"], keyof Message>]: never; }) | undefined;
        contactInfoContent?: ({
            gossipAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            rpcAddress?: {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } | undefined;
            excludedHashes?: string[];
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
            body?: {
                gossipAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                rpcAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                excludedHashes?: string[];
                count?: number;
                hubVersion?: string;
                network?: OpenrealmNetwork;
                appVersion?: string;
                timestamp?: number;
            } | undefined;
            signature?: Uint8Array;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            gossipAddress?: ({
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & { [K_49 in Exclude<keyof I_1["contactInfoContent"]["gossipAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
            rpcAddress?: ({
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & {
                address?: string;
                family?: number;
                port?: number;
                dnsName?: string;
            } & { [K_50 in Exclude<keyof I_1["contactInfoContent"]["rpcAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
            excludedHashes?: string[] & string[] & { [K_51 in Exclude<keyof I_1["contactInfoContent"]["excludedHashes"], keyof string[]>]: never; };
            count?: number;
            hubVersion?: string;
            network?: OpenrealmNetwork;
            appVersion?: string;
            timestamp?: number;
            body?: ({
                gossipAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                rpcAddress?: {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } | undefined;
                excludedHashes?: string[];
                count?: number;
                hubVersion?: string;
                network?: OpenrealmNetwork;
                appVersion?: string;
                timestamp?: number;
            } & {
                gossipAddress?: ({
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } & {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } & { [K_52 in Exclude<keyof I_1["contactInfoContent"]["body"]["gossipAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
                rpcAddress?: ({
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } & {
                    address?: string;
                    family?: number;
                    port?: number;
                    dnsName?: string;
                } & { [K_53 in Exclude<keyof I_1["contactInfoContent"]["body"]["rpcAddress"], keyof GossipAddressInfo>]: never; }) | undefined;
                excludedHashes?: string[] & string[] & { [K_54 in Exclude<keyof I_1["contactInfoContent"]["body"]["excludedHashes"], keyof string[]>]: never; };
                count?: number;
                hubVersion?: string;
                network?: OpenrealmNetwork;
                appVersion?: string;
                timestamp?: number;
            } & { [K_55 in Exclude<keyof I_1["contactInfoContent"]["body"], keyof ContactInfoContentBody>]: never; }) | undefined;
            signature?: Uint8Array;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_56 in Exclude<keyof I_1["contactInfoContent"], keyof ContactInfoContent>]: never; }) | undefined;
        networkLatencyMessage?: ({
            pingMessage?: {
                pingOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
            } | undefined;
            ackMessage?: {
                pingOriginPeerId?: Uint8Array;
                ackOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
                ackTimestamp?: number;
            } | undefined;
        } & {
            pingMessage?: ({
                pingOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
            } & {
                pingOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
            } & { [K_57 in Exclude<keyof I_1["networkLatencyMessage"]["pingMessage"], keyof PingMessageBody>]: never; }) | undefined;
            ackMessage?: ({
                pingOriginPeerId?: Uint8Array;
                ackOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
                ackTimestamp?: number;
            } & {
                pingOriginPeerId?: Uint8Array;
                ackOriginPeerId?: Uint8Array;
                pingTimestamp?: number;
                ackTimestamp?: number;
            } & { [K_58 in Exclude<keyof I_1["networkLatencyMessage"]["ackMessage"], keyof AckMessageBody>]: never; }) | undefined;
        } & { [K_59 in Exclude<keyof I_1["networkLatencyMessage"], keyof NetworkLatencyMessage>]: never; }) | undefined;
        topics?: string[] & string[] & { [K_60 in Exclude<keyof I_1["topics"], keyof string[]>]: never; };
        peerId?: Uint8Array;
        version?: GossipVersion;
    } & { [K_61 in Exclude<keyof I_1, keyof GossipMessage>]: never; }>(object: I_1): GossipMessage;
};

declare enum OnChainEventType {
    EVENT_TYPE_NONE = 0,
    EVENT_TYPE_SIGNER = 1,
    EVENT_TYPE_SIGNER_MIGRATED = 2,
    EVENT_TYPE_ID_REGISTER = 3,
    EVENT_TYPE_STORAGE_RENT = 4
}
declare function onChainEventTypeFromJSON(object: any): OnChainEventType;
declare function onChainEventTypeToJSON(object: OnChainEventType): string;
declare enum SignerEventType {
    NONE = 0,
    ADD = 1,
    REMOVE = 2,
    ADMIN_RESET = 3
}
declare function signerEventTypeFromJSON(object: any): SignerEventType;
declare function signerEventTypeToJSON(object: SignerEventType): string;
declare enum IdRegisterEventType {
    NONE = 0,
    REGISTER = 1,
    TRANSFER = 2,
    CHANGE_RECOVERY = 3
}
declare function idRegisterEventTypeFromJSON(object: any): IdRegisterEventType;
declare function idRegisterEventTypeToJSON(object: IdRegisterEventType): string;
interface OnChainEvent {
    type: OnChainEventType;
    chainId: number;
    blockNumber: number;
    blockHash: Uint8Array;
    blockTimestamp: number;
    transactionHash: Uint8Array;
    logIndex: number;
    qid: number;
    signerEventBody?: SignerEventBody | undefined;
    signerMigratedEventBody?: SignerMigratedEventBody | undefined;
    idRegisterEventBody?: IdRegisterEventBody | undefined;
    storageRentEventBody?: StorageRentEventBody | undefined;
    txIndex: number;
    version: number;
}
declare const OnChainEvent: {
    encode(message: OnChainEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OnChainEvent;
    fromJSON(object: any): OnChainEvent;
    toJSON(message: OnChainEvent): unknown;
    create<I extends {
        type?: OnChainEventType;
        chainId?: number;
        blockNumber?: number;
        blockHash?: Uint8Array;
        blockTimestamp?: number;
        transactionHash?: Uint8Array;
        logIndex?: number;
        qid?: number;
        signerEventBody?: {
            key?: Uint8Array;
            keyType?: number;
            eventType?: SignerEventType;
            metadata?: Uint8Array;
            metadataType?: number;
        } | undefined;
        signerMigratedEventBody?: {
            migratedAt?: number;
        } | undefined;
        idRegisterEventBody?: {
            to?: Uint8Array;
            eventType?: IdRegisterEventType;
            from?: Uint8Array;
            recoveryAddress?: Uint8Array;
        } | undefined;
        storageRentEventBody?: {
            payer?: Uint8Array;
            units?: number;
            expiry?: number;
        } | undefined;
        txIndex?: number;
        version?: number;
    } & {
        type?: OnChainEventType;
        chainId?: number;
        blockNumber?: number;
        blockHash?: Uint8Array;
        blockTimestamp?: number;
        transactionHash?: Uint8Array;
        logIndex?: number;
        qid?: number;
        signerEventBody?: ({
            key?: Uint8Array;
            keyType?: number;
            eventType?: SignerEventType;
            metadata?: Uint8Array;
            metadataType?: number;
        } & {
            key?: Uint8Array;
            keyType?: number;
            eventType?: SignerEventType;
            metadata?: Uint8Array;
            metadataType?: number;
        } & { [K in Exclude<keyof I["signerEventBody"], keyof SignerEventBody>]: never; }) | undefined;
        signerMigratedEventBody?: ({
            migratedAt?: number;
        } & {
            migratedAt?: number;
        } & { [K_1 in Exclude<keyof I["signerMigratedEventBody"], "migratedAt">]: never; }) | undefined;
        idRegisterEventBody?: ({
            to?: Uint8Array;
            eventType?: IdRegisterEventType;
            from?: Uint8Array;
            recoveryAddress?: Uint8Array;
        } & {
            to?: Uint8Array;
            eventType?: IdRegisterEventType;
            from?: Uint8Array;
            recoveryAddress?: Uint8Array;
        } & { [K_2 in Exclude<keyof I["idRegisterEventBody"], keyof IdRegisterEventBody>]: never; }) | undefined;
        storageRentEventBody?: ({
            payer?: Uint8Array;
            units?: number;
            expiry?: number;
        } & {
            payer?: Uint8Array;
            units?: number;
            expiry?: number;
        } & { [K_3 in Exclude<keyof I["storageRentEventBody"], keyof StorageRentEventBody>]: never; }) | undefined;
        txIndex?: number;
        version?: number;
    } & { [K_4 in Exclude<keyof I, keyof OnChainEvent>]: never; }>(base?: I | undefined): OnChainEvent;
    fromPartial<I_1 extends {
        type?: OnChainEventType;
        chainId?: number;
        blockNumber?: number;
        blockHash?: Uint8Array;
        blockTimestamp?: number;
        transactionHash?: Uint8Array;
        logIndex?: number;
        qid?: number;
        signerEventBody?: {
            key?: Uint8Array;
            keyType?: number;
            eventType?: SignerEventType;
            metadata?: Uint8Array;
            metadataType?: number;
        } | undefined;
        signerMigratedEventBody?: {
            migratedAt?: number;
        } | undefined;
        idRegisterEventBody?: {
            to?: Uint8Array;
            eventType?: IdRegisterEventType;
            from?: Uint8Array;
            recoveryAddress?: Uint8Array;
        } | undefined;
        storageRentEventBody?: {
            payer?: Uint8Array;
            units?: number;
            expiry?: number;
        } | undefined;
        txIndex?: number;
        version?: number;
    } & {
        type?: OnChainEventType;
        chainId?: number;
        blockNumber?: number;
        blockHash?: Uint8Array;
        blockTimestamp?: number;
        transactionHash?: Uint8Array;
        logIndex?: number;
        qid?: number;
        signerEventBody?: ({
            key?: Uint8Array;
            keyType?: number;
            eventType?: SignerEventType;
            metadata?: Uint8Array;
            metadataType?: number;
        } & {
            key?: Uint8Array;
            keyType?: number;
            eventType?: SignerEventType;
            metadata?: Uint8Array;
            metadataType?: number;
        } & { [K_5 in Exclude<keyof I_1["signerEventBody"], keyof SignerEventBody>]: never; }) | undefined;
        signerMigratedEventBody?: ({
            migratedAt?: number;
        } & {
            migratedAt?: number;
        } & { [K_6 in Exclude<keyof I_1["signerMigratedEventBody"], "migratedAt">]: never; }) | undefined;
        idRegisterEventBody?: ({
            to?: Uint8Array;
            eventType?: IdRegisterEventType;
            from?: Uint8Array;
            recoveryAddress?: Uint8Array;
        } & {
            to?: Uint8Array;
            eventType?: IdRegisterEventType;
            from?: Uint8Array;
            recoveryAddress?: Uint8Array;
        } & { [K_7 in Exclude<keyof I_1["idRegisterEventBody"], keyof IdRegisterEventBody>]: never; }) | undefined;
        storageRentEventBody?: ({
            payer?: Uint8Array;
            units?: number;
            expiry?: number;
        } & {
            payer?: Uint8Array;
            units?: number;
            expiry?: number;
        } & { [K_8 in Exclude<keyof I_1["storageRentEventBody"], keyof StorageRentEventBody>]: never; }) | undefined;
        txIndex?: number;
        version?: number;
    } & { [K_9 in Exclude<keyof I_1, keyof OnChainEvent>]: never; }>(object: I_1): OnChainEvent;
};
interface SignerEventBody {
    key: Uint8Array;
    keyType: number;
    eventType: SignerEventType;
    metadata: Uint8Array;
    metadataType: number;
}
declare const SignerEventBody: {
    encode(message: SignerEventBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignerEventBody;
    fromJSON(object: any): SignerEventBody;
    toJSON(message: SignerEventBody): unknown;
    create<I extends {
        key?: Uint8Array;
        keyType?: number;
        eventType?: SignerEventType;
        metadata?: Uint8Array;
        metadataType?: number;
    } & {
        key?: Uint8Array;
        keyType?: number;
        eventType?: SignerEventType;
        metadata?: Uint8Array;
        metadataType?: number;
    } & { [K in Exclude<keyof I, keyof SignerEventBody>]: never; }>(base?: I | undefined): SignerEventBody;
    fromPartial<I_1 extends {
        key?: Uint8Array;
        keyType?: number;
        eventType?: SignerEventType;
        metadata?: Uint8Array;
        metadataType?: number;
    } & {
        key?: Uint8Array;
        keyType?: number;
        eventType?: SignerEventType;
        metadata?: Uint8Array;
        metadataType?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof SignerEventBody>]: never; }>(object: I_1): SignerEventBody;
};
interface SignerMigratedEventBody {
    migratedAt: number;
}
declare const SignerMigratedEventBody: {
    encode(message: SignerMigratedEventBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignerMigratedEventBody;
    fromJSON(object: any): SignerMigratedEventBody;
    toJSON(message: SignerMigratedEventBody): unknown;
    create<I extends {
        migratedAt?: number;
    } & {
        migratedAt?: number;
    } & { [K in Exclude<keyof I, "migratedAt">]: never; }>(base?: I | undefined): SignerMigratedEventBody;
    fromPartial<I_1 extends {
        migratedAt?: number;
    } & {
        migratedAt?: number;
    } & { [K_1 in Exclude<keyof I_1, "migratedAt">]: never; }>(object: I_1): SignerMigratedEventBody;
};
interface IdRegisterEventBody {
    to: Uint8Array;
    eventType: IdRegisterEventType;
    from: Uint8Array;
    recoveryAddress: Uint8Array;
}
declare const IdRegisterEventBody: {
    encode(message: IdRegisterEventBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdRegisterEventBody;
    fromJSON(object: any): IdRegisterEventBody;
    toJSON(message: IdRegisterEventBody): unknown;
    create<I extends {
        to?: Uint8Array;
        eventType?: IdRegisterEventType;
        from?: Uint8Array;
        recoveryAddress?: Uint8Array;
    } & {
        to?: Uint8Array;
        eventType?: IdRegisterEventType;
        from?: Uint8Array;
        recoveryAddress?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof IdRegisterEventBody>]: never; }>(base?: I | undefined): IdRegisterEventBody;
    fromPartial<I_1 extends {
        to?: Uint8Array;
        eventType?: IdRegisterEventType;
        from?: Uint8Array;
        recoveryAddress?: Uint8Array;
    } & {
        to?: Uint8Array;
        eventType?: IdRegisterEventType;
        from?: Uint8Array;
        recoveryAddress?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, keyof IdRegisterEventBody>]: never; }>(object: I_1): IdRegisterEventBody;
};
interface StorageRentEventBody {
    payer: Uint8Array;
    units: number;
    expiry: number;
}
declare const StorageRentEventBody: {
    encode(message: StorageRentEventBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageRentEventBody;
    fromJSON(object: any): StorageRentEventBody;
    toJSON(message: StorageRentEventBody): unknown;
    create<I extends {
        payer?: Uint8Array;
        units?: number;
        expiry?: number;
    } & {
        payer?: Uint8Array;
        units?: number;
        expiry?: number;
    } & { [K in Exclude<keyof I, keyof StorageRentEventBody>]: never; }>(base?: I | undefined): StorageRentEventBody;
    fromPartial<I_1 extends {
        payer?: Uint8Array;
        units?: number;
        expiry?: number;
    } & {
        payer?: Uint8Array;
        units?: number;
        expiry?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof StorageRentEventBody>]: never; }>(object: I_1): StorageRentEventBody;
};

declare enum HubEventType {
    NONE = 0,
    MERGE_MESSAGE = 1,
    PRUNE_MESSAGE = 2,
    REVOKE_MESSAGE = 3,
    /**
     * MERGE_USERNAME_PROOF - Deprecated
     *  HUB_EVENT_TYPE_MERGE_ID_REGISTRY_EVENT = 4;
     *  HUB_EVENT_TYPE_MERGE_NAME_REGISTRY_EVENT = 5;
     */
    MERGE_USERNAME_PROOF = 6,
    /**
     * MERGE_ON_CHAIN_EVENT - Deprecated
     *  HUB_EVENT_TYPE_MERGE_RENT_REGISTRY_EVENT = 7;
     *  HUB_EVENT_TYPE_MERGE_STORAGE_ADMIN_REGISTRY_EVENT = 8;
     */
    MERGE_ON_CHAIN_EVENT = 9
}
declare function hubEventTypeFromJSON(object: any): HubEventType;
declare function hubEventTypeToJSON(object: HubEventType): string;
interface MergeMessageBody {
    message: Message | undefined;
    deletedMessages: Message[];
}
declare const MergeMessageBody: {
    encode(message: MergeMessageBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MergeMessageBody;
    fromJSON(object: any): MergeMessageBody;
    toJSON(message: MergeMessageBody): unknown;
    create<I extends {
        message?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
        deletedMessages?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[];
    } & {
        message?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K in Exclude<keyof I["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_1 in Exclude<keyof I["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_2 in Exclude<keyof I["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_3 in Exclude<keyof I["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_4 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_6 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_7 in Exclude<keyof I["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_8 in Exclude<keyof I["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_9 in Exclude<keyof I["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_10 in Exclude<keyof I["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_11 in Exclude<keyof I["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_12 in Exclude<keyof I["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_13 in Exclude<keyof I["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_14 in Exclude<keyof I["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_15 in Exclude<keyof I["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["message"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_17 in Exclude<keyof I["message"], keyof Message>]: never; }) | undefined;
        deletedMessages?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[] & ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K_18 in Exclude<keyof I["deletedMessages"][number]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_19 in Exclude<keyof I["deletedMessages"][number]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_20 in Exclude<keyof I["deletedMessages"][number]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_21 in Exclude<keyof I["deletedMessages"][number]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_22 in Exclude<keyof I["deletedMessages"][number]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_23 in Exclude<keyof I["deletedMessages"][number]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_24 in Exclude<keyof I["deletedMessages"][number]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_25 in Exclude<keyof I["deletedMessages"][number]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_26 in Exclude<keyof I["deletedMessages"][number]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_27 in Exclude<keyof I["deletedMessages"][number]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_28 in Exclude<keyof I["deletedMessages"][number]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_29 in Exclude<keyof I["deletedMessages"][number]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_30 in Exclude<keyof I["deletedMessages"][number]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_31 in Exclude<keyof I["deletedMessages"][number]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_32 in Exclude<keyof I["deletedMessages"][number]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_33 in Exclude<keyof I["deletedMessages"][number]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_34 in Exclude<keyof I["deletedMessages"][number]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_35 in Exclude<keyof I["deletedMessages"][number], keyof Message>]: never; })[] & { [K_36 in Exclude<keyof I["deletedMessages"], keyof {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[]>]: never; };
    } & { [K_37 in Exclude<keyof I, keyof MergeMessageBody>]: never; }>(base?: I | undefined): MergeMessageBody;
    fromPartial<I_1 extends {
        message?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
        deletedMessages?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[];
    } & {
        message?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K_38 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_39 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_40 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_41 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_42 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_43 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_44 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_45 in Exclude<keyof I_1["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_46 in Exclude<keyof I_1["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_47 in Exclude<keyof I_1["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_48 in Exclude<keyof I_1["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_49 in Exclude<keyof I_1["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_50 in Exclude<keyof I_1["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_51 in Exclude<keyof I_1["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_52 in Exclude<keyof I_1["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_53 in Exclude<keyof I_1["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_54 in Exclude<keyof I_1["message"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_55 in Exclude<keyof I_1["message"], keyof Message>]: never; }) | undefined;
        deletedMessages?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[] & ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K_56 in Exclude<keyof I_1["deletedMessages"][number]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_57 in Exclude<keyof I_1["deletedMessages"][number]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_58 in Exclude<keyof I_1["deletedMessages"][number]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_59 in Exclude<keyof I_1["deletedMessages"][number]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_60 in Exclude<keyof I_1["deletedMessages"][number]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_61 in Exclude<keyof I_1["deletedMessages"][number]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_62 in Exclude<keyof I_1["deletedMessages"][number]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_63 in Exclude<keyof I_1["deletedMessages"][number]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_64 in Exclude<keyof I_1["deletedMessages"][number]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_65 in Exclude<keyof I_1["deletedMessages"][number]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_66 in Exclude<keyof I_1["deletedMessages"][number]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_67 in Exclude<keyof I_1["deletedMessages"][number]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_68 in Exclude<keyof I_1["deletedMessages"][number]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_69 in Exclude<keyof I_1["deletedMessages"][number]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_70 in Exclude<keyof I_1["deletedMessages"][number]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_71 in Exclude<keyof I_1["deletedMessages"][number]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_72 in Exclude<keyof I_1["deletedMessages"][number]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_73 in Exclude<keyof I_1["deletedMessages"][number], keyof Message>]: never; })[] & { [K_74 in Exclude<keyof I_1["deletedMessages"], keyof {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[]>]: never; };
    } & { [K_75 in Exclude<keyof I_1, keyof MergeMessageBody>]: never; }>(object: I_1): MergeMessageBody;
};
interface PruneMessageBody {
    message: Message | undefined;
}
declare const PruneMessageBody: {
    encode(message: PruneMessageBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PruneMessageBody;
    fromJSON(object: any): PruneMessageBody;
    toJSON(message: PruneMessageBody): unknown;
    create<I extends {
        message?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
    } & {
        message?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K in Exclude<keyof I["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_1 in Exclude<keyof I["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_2 in Exclude<keyof I["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_3 in Exclude<keyof I["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_4 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_6 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_7 in Exclude<keyof I["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_8 in Exclude<keyof I["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_9 in Exclude<keyof I["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_10 in Exclude<keyof I["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_11 in Exclude<keyof I["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_12 in Exclude<keyof I["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_13 in Exclude<keyof I["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_14 in Exclude<keyof I["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_15 in Exclude<keyof I["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["message"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_17 in Exclude<keyof I["message"], keyof Message>]: never; }) | undefined;
    } & { [K_18 in Exclude<keyof I, "message">]: never; }>(base?: I | undefined): PruneMessageBody;
    fromPartial<I_1 extends {
        message?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
    } & {
        message?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K_19 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_20 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_21 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_22 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_23 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_24 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_25 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_26 in Exclude<keyof I_1["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_27 in Exclude<keyof I_1["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_28 in Exclude<keyof I_1["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_29 in Exclude<keyof I_1["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_30 in Exclude<keyof I_1["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_31 in Exclude<keyof I_1["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_32 in Exclude<keyof I_1["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_33 in Exclude<keyof I_1["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_34 in Exclude<keyof I_1["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_35 in Exclude<keyof I_1["message"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_36 in Exclude<keyof I_1["message"], keyof Message>]: never; }) | undefined;
    } & { [K_37 in Exclude<keyof I_1, "message">]: never; }>(object: I_1): PruneMessageBody;
};
interface RevokeMessageBody {
    message: Message | undefined;
}
declare const RevokeMessageBody: {
    encode(message: RevokeMessageBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevokeMessageBody;
    fromJSON(object: any): RevokeMessageBody;
    toJSON(message: RevokeMessageBody): unknown;
    create<I extends {
        message?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
    } & {
        message?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K in Exclude<keyof I["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_1 in Exclude<keyof I["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_2 in Exclude<keyof I["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_3 in Exclude<keyof I["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_4 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_6 in Exclude<keyof I["message"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_7 in Exclude<keyof I["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_8 in Exclude<keyof I["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_9 in Exclude<keyof I["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_10 in Exclude<keyof I["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_11 in Exclude<keyof I["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_12 in Exclude<keyof I["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_13 in Exclude<keyof I["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_14 in Exclude<keyof I["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_15 in Exclude<keyof I["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["message"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_17 in Exclude<keyof I["message"], keyof Message>]: never; }) | undefined;
    } & { [K_18 in Exclude<keyof I, "message">]: never; }>(base?: I | undefined): RevokeMessageBody;
    fromPartial<I_1 extends {
        message?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
    } & {
        message?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K_19 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_20 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_21 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_22 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_23 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_24 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_25 in Exclude<keyof I_1["message"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_26 in Exclude<keyof I_1["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_27 in Exclude<keyof I_1["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_28 in Exclude<keyof I_1["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_29 in Exclude<keyof I_1["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_30 in Exclude<keyof I_1["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_31 in Exclude<keyof I_1["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_32 in Exclude<keyof I_1["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_33 in Exclude<keyof I_1["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_34 in Exclude<keyof I_1["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_35 in Exclude<keyof I_1["message"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_36 in Exclude<keyof I_1["message"], keyof Message>]: never; }) | undefined;
    } & { [K_37 in Exclude<keyof I_1, "message">]: never; }>(object: I_1): RevokeMessageBody;
};
interface MergeOnChainEventBody {
    onChainEvent: OnChainEvent | undefined;
}
declare const MergeOnChainEventBody: {
    encode(message: MergeOnChainEventBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MergeOnChainEventBody;
    fromJSON(object: any): MergeOnChainEventBody;
    toJSON(message: MergeOnChainEventBody): unknown;
    create<I extends {
        onChainEvent?: {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        } | undefined;
    } & {
        onChainEvent?: ({
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        } & {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: ({
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } & {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } & { [K in Exclude<keyof I["onChainEvent"]["signerEventBody"], keyof SignerEventBody>]: never; }) | undefined;
            signerMigratedEventBody?: ({
                migratedAt?: number;
            } & {
                migratedAt?: number;
            } & { [K_1 in Exclude<keyof I["onChainEvent"]["signerMigratedEventBody"], "migratedAt">]: never; }) | undefined;
            idRegisterEventBody?: ({
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } & {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } & { [K_2 in Exclude<keyof I["onChainEvent"]["idRegisterEventBody"], keyof IdRegisterEventBody>]: never; }) | undefined;
            storageRentEventBody?: ({
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } & {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } & { [K_3 in Exclude<keyof I["onChainEvent"]["storageRentEventBody"], keyof StorageRentEventBody>]: never; }) | undefined;
            txIndex?: number;
            version?: number;
        } & { [K_4 in Exclude<keyof I["onChainEvent"], keyof OnChainEvent>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "onChainEvent">]: never; }>(base?: I | undefined): MergeOnChainEventBody;
    fromPartial<I_1 extends {
        onChainEvent?: {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        } | undefined;
    } & {
        onChainEvent?: ({
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        } & {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: ({
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } & {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } & { [K_6 in Exclude<keyof I_1["onChainEvent"]["signerEventBody"], keyof SignerEventBody>]: never; }) | undefined;
            signerMigratedEventBody?: ({
                migratedAt?: number;
            } & {
                migratedAt?: number;
            } & { [K_7 in Exclude<keyof I_1["onChainEvent"]["signerMigratedEventBody"], "migratedAt">]: never; }) | undefined;
            idRegisterEventBody?: ({
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } & {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } & { [K_8 in Exclude<keyof I_1["onChainEvent"]["idRegisterEventBody"], keyof IdRegisterEventBody>]: never; }) | undefined;
            storageRentEventBody?: ({
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } & {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } & { [K_9 in Exclude<keyof I_1["onChainEvent"]["storageRentEventBody"], keyof StorageRentEventBody>]: never; }) | undefined;
            txIndex?: number;
            version?: number;
        } & { [K_10 in Exclude<keyof I_1["onChainEvent"], keyof OnChainEvent>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, "onChainEvent">]: never; }>(object: I_1): MergeOnChainEventBody;
};
interface MergeUserNameProofBody {
    usernameProof: UserNameProof | undefined;
    deletedUsernameProof: UserNameProof | undefined;
    usernameProofMessage: Message | undefined;
    deletedUsernameProofMessage: Message | undefined;
}
declare const MergeUserNameProofBody: {
    encode(message: MergeUserNameProofBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MergeUserNameProofBody;
    fromJSON(object: any): MergeUserNameProofBody;
    toJSON(message: MergeUserNameProofBody): unknown;
    create<I extends {
        usernameProof?: {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } | undefined;
        deletedUsernameProof?: {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } | undefined;
        usernameProofMessage?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
        deletedUsernameProofMessage?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
    } & {
        usernameProof?: ({
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & { [K in Exclude<keyof I["usernameProof"], keyof UserNameProof>]: never; }) | undefined;
        deletedUsernameProof?: ({
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & { [K_1 in Exclude<keyof I["deletedUsernameProof"], keyof UserNameProof>]: never; }) | undefined;
        usernameProofMessage?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K_2 in Exclude<keyof I["usernameProofMessage"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_3 in Exclude<keyof I["usernameProofMessage"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_4 in Exclude<keyof I["usernameProofMessage"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_5 in Exclude<keyof I["usernameProofMessage"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_6 in Exclude<keyof I["usernameProofMessage"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_7 in Exclude<keyof I["usernameProofMessage"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_8 in Exclude<keyof I["usernameProofMessage"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_9 in Exclude<keyof I["usernameProofMessage"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_10 in Exclude<keyof I["usernameProofMessage"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_11 in Exclude<keyof I["usernameProofMessage"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_12 in Exclude<keyof I["usernameProofMessage"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_13 in Exclude<keyof I["usernameProofMessage"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_14 in Exclude<keyof I["usernameProofMessage"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_15 in Exclude<keyof I["usernameProofMessage"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_16 in Exclude<keyof I["usernameProofMessage"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_17 in Exclude<keyof I["usernameProofMessage"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_18 in Exclude<keyof I["usernameProofMessage"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_19 in Exclude<keyof I["usernameProofMessage"], keyof Message>]: never; }) | undefined;
        deletedUsernameProofMessage?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K_20 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_21 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_22 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_23 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_24 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_25 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_26 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_27 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_28 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_29 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_30 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_31 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_32 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_33 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_34 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_35 in Exclude<keyof I["deletedUsernameProofMessage"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_36 in Exclude<keyof I["deletedUsernameProofMessage"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_37 in Exclude<keyof I["deletedUsernameProofMessage"], keyof Message>]: never; }) | undefined;
    } & { [K_38 in Exclude<keyof I, keyof MergeUserNameProofBody>]: never; }>(base?: I | undefined): MergeUserNameProofBody;
    fromPartial<I_1 extends {
        usernameProof?: {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } | undefined;
        deletedUsernameProof?: {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } | undefined;
        usernameProofMessage?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
        deletedUsernameProofMessage?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } | undefined;
    } & {
        usernameProof?: ({
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & { [K_39 in Exclude<keyof I_1["usernameProof"], keyof UserNameProof>]: never; }) | undefined;
        deletedUsernameProof?: ({
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & { [K_40 in Exclude<keyof I_1["deletedUsernameProof"], keyof UserNameProof>]: never; }) | undefined;
        usernameProofMessage?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K_41 in Exclude<keyof I_1["usernameProofMessage"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_42 in Exclude<keyof I_1["usernameProofMessage"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_43 in Exclude<keyof I_1["usernameProofMessage"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_44 in Exclude<keyof I_1["usernameProofMessage"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_45 in Exclude<keyof I_1["usernameProofMessage"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_46 in Exclude<keyof I_1["usernameProofMessage"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_47 in Exclude<keyof I_1["usernameProofMessage"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_48 in Exclude<keyof I_1["usernameProofMessage"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_49 in Exclude<keyof I_1["usernameProofMessage"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_50 in Exclude<keyof I_1["usernameProofMessage"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_51 in Exclude<keyof I_1["usernameProofMessage"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_52 in Exclude<keyof I_1["usernameProofMessage"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_53 in Exclude<keyof I_1["usernameProofMessage"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_54 in Exclude<keyof I_1["usernameProofMessage"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_55 in Exclude<keyof I_1["usernameProofMessage"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_56 in Exclude<keyof I_1["usernameProofMessage"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_57 in Exclude<keyof I_1["usernameProofMessage"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_58 in Exclude<keyof I_1["usernameProofMessage"], keyof Message>]: never; }) | undefined;
        deletedUsernameProofMessage?: ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K_59 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_60 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_61 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_62 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_63 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_64 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_65 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_66 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_67 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_68 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_69 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_70 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_71 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_72 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_73 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_74 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_75 in Exclude<keyof I_1["deletedUsernameProofMessage"]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_76 in Exclude<keyof I_1["deletedUsernameProofMessage"], keyof Message>]: never; }) | undefined;
    } & { [K_77 in Exclude<keyof I_1, keyof MergeUserNameProofBody>]: never; }>(object: I_1): MergeUserNameProofBody;
};
interface HubEvent {
    type: HubEventType;
    id: number;
    mergeMessageBody?: MergeMessageBody | undefined;
    pruneMessageBody?: PruneMessageBody | undefined;
    revokeMessageBody?: RevokeMessageBody | undefined;
    /**
     * Deprecated
     *    MergeIdRegistryEventBody merge_id_registry_event_body = 6;
     *    MergeNameRegistryEventBody merge_name_registry_event_body = 7;
     */
    mergeUsernameProofBody?: MergeUserNameProofBody | undefined;
    /**
     * Deprecated
     *    MergeRentRegistryEventBody merge_rent_registry_event_body = 9;
     *    MergeStorageAdminRegistryEventBody merge_storage_admin_registry_event_body = 10;
     */
    mergeOnChainEventBody?: MergeOnChainEventBody | undefined;
}
declare const HubEvent: {
    encode(message: HubEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HubEvent;
    fromJSON(object: any): HubEvent;
    toJSON(message: HubEvent): unknown;
    create<I extends {
        type?: HubEventType;
        id?: number;
        mergeMessageBody?: {
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
            deletedMessages?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            }[];
        } | undefined;
        pruneMessageBody?: {
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        revokeMessageBody?: {
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        mergeUsernameProofBody?: {
            usernameProof?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
            deletedUsernameProof?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
            usernameProofMessage?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
            deletedUsernameProofMessage?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        mergeOnChainEventBody?: {
            onChainEvent?: {
                type?: OnChainEventType;
                chainId?: number;
                blockNumber?: number;
                blockHash?: Uint8Array;
                blockTimestamp?: number;
                transactionHash?: Uint8Array;
                logIndex?: number;
                qid?: number;
                signerEventBody?: {
                    key?: Uint8Array;
                    keyType?: number;
                    eventType?: SignerEventType;
                    metadata?: Uint8Array;
                    metadataType?: number;
                } | undefined;
                signerMigratedEventBody?: {
                    migratedAt?: number;
                } | undefined;
                idRegisterEventBody?: {
                    to?: Uint8Array;
                    eventType?: IdRegisterEventType;
                    from?: Uint8Array;
                    recoveryAddress?: Uint8Array;
                } | undefined;
                storageRentEventBody?: {
                    payer?: Uint8Array;
                    units?: number;
                    expiry?: number;
                } | undefined;
                txIndex?: number;
                version?: number;
            } | undefined;
        } | undefined;
    } & {
        type?: HubEventType;
        id?: number;
        mergeMessageBody?: ({
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
            deletedMessages?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            }[];
        } & {
            message?: ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_1 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_2 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_3 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_4 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_5 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_6 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_7 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_8 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_9 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_10 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_11 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_12 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_13 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_14 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_15 in Exclude<keyof I["mergeMessageBody"]["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_16 in Exclude<keyof I["mergeMessageBody"]["message"]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_17 in Exclude<keyof I["mergeMessageBody"]["message"], keyof Message>]: never; }) | undefined;
            deletedMessages?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            }[] & ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K_18 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_19 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_20 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_21 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_22 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_23 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_24 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_25 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_26 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_27 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_28 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_29 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_30 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_31 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_32 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_33 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_34 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_35 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"][number], keyof Message>]: never; })[] & { [K_36 in Exclude<keyof I["mergeMessageBody"]["deletedMessages"], keyof {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            }[]>]: never; };
        } & { [K_37 in Exclude<keyof I["mergeMessageBody"], keyof MergeMessageBody>]: never; }) | undefined;
        pruneMessageBody?: ({
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } & {
            message?: ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K_38 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_39 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_40 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_41 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_42 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_43 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_44 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_45 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_46 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_47 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_48 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_49 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_50 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_51 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_52 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_53 in Exclude<keyof I["pruneMessageBody"]["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_54 in Exclude<keyof I["pruneMessageBody"]["message"]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_55 in Exclude<keyof I["pruneMessageBody"]["message"], keyof Message>]: never; }) | undefined;
        } & { [K_56 in Exclude<keyof I["pruneMessageBody"], "message">]: never; }) | undefined;
        revokeMessageBody?: ({
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } & {
            message?: ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K_57 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_58 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_59 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_60 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_61 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_62 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_63 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_64 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_65 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_66 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_67 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_68 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_69 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_70 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_71 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_72 in Exclude<keyof I["revokeMessageBody"]["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_73 in Exclude<keyof I["revokeMessageBody"]["message"]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_74 in Exclude<keyof I["revokeMessageBody"]["message"], keyof Message>]: never; }) | undefined;
        } & { [K_75 in Exclude<keyof I["revokeMessageBody"], "message">]: never; }) | undefined;
        mergeUsernameProofBody?: ({
            usernameProof?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
            deletedUsernameProof?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
            usernameProofMessage?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
            deletedUsernameProofMessage?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } & {
            usernameProof?: ({
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & { [K_76 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProof"], keyof UserNameProof>]: never; }) | undefined;
            deletedUsernameProof?: ({
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & { [K_77 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProof"], keyof UserNameProof>]: never; }) | undefined;
            usernameProofMessage?: ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K_78 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_79 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_80 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_81 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_82 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_83 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_84 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_85 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_86 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_87 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_88 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_89 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_90 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_91 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_92 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_93 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_94 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_95 in Exclude<keyof I["mergeUsernameProofBody"]["usernameProofMessage"], keyof Message>]: never; }) | undefined;
            deletedUsernameProofMessage?: ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K_96 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_97 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_98 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_99 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_100 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_101 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_102 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_103 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_104 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_105 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_106 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_107 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_108 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_109 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_110 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_111 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_112 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_113 in Exclude<keyof I["mergeUsernameProofBody"]["deletedUsernameProofMessage"], keyof Message>]: never; }) | undefined;
        } & { [K_114 in Exclude<keyof I["mergeUsernameProofBody"], keyof MergeUserNameProofBody>]: never; }) | undefined;
        mergeOnChainEventBody?: ({
            onChainEvent?: {
                type?: OnChainEventType;
                chainId?: number;
                blockNumber?: number;
                blockHash?: Uint8Array;
                blockTimestamp?: number;
                transactionHash?: Uint8Array;
                logIndex?: number;
                qid?: number;
                signerEventBody?: {
                    key?: Uint8Array;
                    keyType?: number;
                    eventType?: SignerEventType;
                    metadata?: Uint8Array;
                    metadataType?: number;
                } | undefined;
                signerMigratedEventBody?: {
                    migratedAt?: number;
                } | undefined;
                idRegisterEventBody?: {
                    to?: Uint8Array;
                    eventType?: IdRegisterEventType;
                    from?: Uint8Array;
                    recoveryAddress?: Uint8Array;
                } | undefined;
                storageRentEventBody?: {
                    payer?: Uint8Array;
                    units?: number;
                    expiry?: number;
                } | undefined;
                txIndex?: number;
                version?: number;
            } | undefined;
        } & {
            onChainEvent?: ({
                type?: OnChainEventType;
                chainId?: number;
                blockNumber?: number;
                blockHash?: Uint8Array;
                blockTimestamp?: number;
                transactionHash?: Uint8Array;
                logIndex?: number;
                qid?: number;
                signerEventBody?: {
                    key?: Uint8Array;
                    keyType?: number;
                    eventType?: SignerEventType;
                    metadata?: Uint8Array;
                    metadataType?: number;
                } | undefined;
                signerMigratedEventBody?: {
                    migratedAt?: number;
                } | undefined;
                idRegisterEventBody?: {
                    to?: Uint8Array;
                    eventType?: IdRegisterEventType;
                    from?: Uint8Array;
                    recoveryAddress?: Uint8Array;
                } | undefined;
                storageRentEventBody?: {
                    payer?: Uint8Array;
                    units?: number;
                    expiry?: number;
                } | undefined;
                txIndex?: number;
                version?: number;
            } & {
                type?: OnChainEventType;
                chainId?: number;
                blockNumber?: number;
                blockHash?: Uint8Array;
                blockTimestamp?: number;
                transactionHash?: Uint8Array;
                logIndex?: number;
                qid?: number;
                signerEventBody?: ({
                    key?: Uint8Array;
                    keyType?: number;
                    eventType?: SignerEventType;
                    metadata?: Uint8Array;
                    metadataType?: number;
                } & {
                    key?: Uint8Array;
                    keyType?: number;
                    eventType?: SignerEventType;
                    metadata?: Uint8Array;
                    metadataType?: number;
                } & { [K_115 in Exclude<keyof I["mergeOnChainEventBody"]["onChainEvent"]["signerEventBody"], keyof SignerEventBody>]: never; }) | undefined;
                signerMigratedEventBody?: ({
                    migratedAt?: number;
                } & {
                    migratedAt?: number;
                } & { [K_116 in Exclude<keyof I["mergeOnChainEventBody"]["onChainEvent"]["signerMigratedEventBody"], "migratedAt">]: never; }) | undefined;
                idRegisterEventBody?: ({
                    to?: Uint8Array;
                    eventType?: IdRegisterEventType;
                    from?: Uint8Array;
                    recoveryAddress?: Uint8Array;
                } & {
                    to?: Uint8Array;
                    eventType?: IdRegisterEventType;
                    from?: Uint8Array;
                    recoveryAddress?: Uint8Array;
                } & { [K_117 in Exclude<keyof I["mergeOnChainEventBody"]["onChainEvent"]["idRegisterEventBody"], keyof IdRegisterEventBody>]: never; }) | undefined;
                storageRentEventBody?: ({
                    payer?: Uint8Array;
                    units?: number;
                    expiry?: number;
                } & {
                    payer?: Uint8Array;
                    units?: number;
                    expiry?: number;
                } & { [K_118 in Exclude<keyof I["mergeOnChainEventBody"]["onChainEvent"]["storageRentEventBody"], keyof StorageRentEventBody>]: never; }) | undefined;
                txIndex?: number;
                version?: number;
            } & { [K_119 in Exclude<keyof I["mergeOnChainEventBody"]["onChainEvent"], keyof OnChainEvent>]: never; }) | undefined;
        } & { [K_120 in Exclude<keyof I["mergeOnChainEventBody"], "onChainEvent">]: never; }) | undefined;
    } & { [K_121 in Exclude<keyof I, keyof HubEvent>]: never; }>(base?: I | undefined): HubEvent;
    fromPartial<I_1 extends {
        type?: HubEventType;
        id?: number;
        mergeMessageBody?: {
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
            deletedMessages?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            }[];
        } | undefined;
        pruneMessageBody?: {
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        revokeMessageBody?: {
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        mergeUsernameProofBody?: {
            usernameProof?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
            deletedUsernameProof?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
            usernameProofMessage?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
            deletedUsernameProofMessage?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        mergeOnChainEventBody?: {
            onChainEvent?: {
                type?: OnChainEventType;
                chainId?: number;
                blockNumber?: number;
                blockHash?: Uint8Array;
                blockTimestamp?: number;
                transactionHash?: Uint8Array;
                logIndex?: number;
                qid?: number;
                signerEventBody?: {
                    key?: Uint8Array;
                    keyType?: number;
                    eventType?: SignerEventType;
                    metadata?: Uint8Array;
                    metadataType?: number;
                } | undefined;
                signerMigratedEventBody?: {
                    migratedAt?: number;
                } | undefined;
                idRegisterEventBody?: {
                    to?: Uint8Array;
                    eventType?: IdRegisterEventType;
                    from?: Uint8Array;
                    recoveryAddress?: Uint8Array;
                } | undefined;
                storageRentEventBody?: {
                    payer?: Uint8Array;
                    units?: number;
                    expiry?: number;
                } | undefined;
                txIndex?: number;
                version?: number;
            } | undefined;
        } | undefined;
    } & {
        type?: HubEventType;
        id?: number;
        mergeMessageBody?: ({
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
            deletedMessages?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            }[];
        } & {
            message?: ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K_122 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_123 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_124 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_125 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_126 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_127 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_128 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_129 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_130 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_131 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_132 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_133 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_134 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_135 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_136 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_137 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_138 in Exclude<keyof I_1["mergeMessageBody"]["message"]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_139 in Exclude<keyof I_1["mergeMessageBody"]["message"], keyof Message>]: never; }) | undefined;
            deletedMessages?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            }[] & ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K_140 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_141 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_142 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_143 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_144 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_145 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_146 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_147 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_148 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_149 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_150 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_151 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_152 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_153 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_154 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_155 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_156 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_157 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"][number], keyof Message>]: never; })[] & { [K_158 in Exclude<keyof I_1["mergeMessageBody"]["deletedMessages"], keyof {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            }[]>]: never; };
        } & { [K_159 in Exclude<keyof I_1["mergeMessageBody"], keyof MergeMessageBody>]: never; }) | undefined;
        pruneMessageBody?: ({
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } & {
            message?: ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K_160 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_161 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_162 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_163 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_164 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_165 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_166 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_167 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_168 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_169 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_170 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_171 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_172 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_173 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_174 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_175 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_176 in Exclude<keyof I_1["pruneMessageBody"]["message"]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_177 in Exclude<keyof I_1["pruneMessageBody"]["message"], keyof Message>]: never; }) | undefined;
        } & { [K_178 in Exclude<keyof I_1["pruneMessageBody"], "message">]: never; }) | undefined;
        revokeMessageBody?: ({
            message?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } & {
            message?: ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K_179 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_180 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_181 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_182 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_183 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_184 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_185 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_186 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_187 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_188 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_189 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_190 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_191 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_192 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_193 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_194 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_195 in Exclude<keyof I_1["revokeMessageBody"]["message"]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_196 in Exclude<keyof I_1["revokeMessageBody"]["message"], keyof Message>]: never; }) | undefined;
        } & { [K_197 in Exclude<keyof I_1["revokeMessageBody"], "message">]: never; }) | undefined;
        mergeUsernameProofBody?: ({
            usernameProof?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
            deletedUsernameProof?: {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } | undefined;
            usernameProofMessage?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
            deletedUsernameProofMessage?: {
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } | undefined;
        } & {
            usernameProof?: ({
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & { [K_198 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProof"], keyof UserNameProof>]: never; }) | undefined;
            deletedUsernameProof?: ({
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & {
                timestamp?: number;
                name?: Uint8Array;
                owner?: Uint8Array;
                signature?: Uint8Array;
                qid?: number;
                type?: UserNameType;
            } & { [K_199 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProof"], keyof UserNameProof>]: never; }) | undefined;
            usernameProofMessage?: ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K_200 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_201 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_202 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_203 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_204 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_205 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_206 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_207 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_208 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_209 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_210 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_211 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_212 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_213 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_214 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_215 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_216 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_217 in Exclude<keyof I_1["mergeUsernameProofBody"]["usernameProofMessage"], keyof Message>]: never; }) | undefined;
            deletedUsernameProofMessage?: ({
                data?: {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & {
                data?: ({
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: {
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } | undefined;
                    castRemoveBody?: {
                        targetHash?: Uint8Array;
                    } | undefined;
                    reactionBody?: {
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } | undefined;
                    verificationAddEthAddressBody?: {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } | undefined;
                    verificationRemoveBody?: {
                        address?: Uint8Array;
                    } | undefined;
                    userDataBody?: {
                        type?: UserDataType;
                        value?: string;
                    } | undefined;
                    linkBody?: {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } | undefined;
                    usernameProofBody?: {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } | undefined;
                } & {
                    type?: MessageType;
                    qid?: number;
                    timestamp?: number;
                    network?: OpenrealmNetwork;
                    castAddBody?: ({
                        embedsDeprecated?: string[];
                        mentions?: number[];
                        parentCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[];
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[];
                    } & {
                        embedsDeprecated?: string[] & string[] & { [K_218 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                        mentions?: number[] & number[] & { [K_219 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                        parentCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_220 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                        parentUrl?: string | undefined;
                        text?: string;
                        mentionsPositions?: number[] & number[] & { [K_221 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                        embeds?: {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[] & ({
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        } & {
                            url?: string | undefined;
                            castId?: ({
                                qid?: number;
                                hash?: Uint8Array;
                            } & {
                                qid?: number;
                                hash?: Uint8Array;
                            } & { [K_222 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                        } & { [K_223 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_224 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"]["embeds"], keyof {
                            url?: string | undefined;
                            castId?: {
                                qid?: number;
                                hash?: Uint8Array;
                            } | undefined;
                        }[]>]: never; };
                    } & { [K_225 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                    castRemoveBody?: ({
                        targetHash?: Uint8Array;
                    } & {
                        targetHash?: Uint8Array;
                    } & { [K_226 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                    reactionBody?: ({
                        type?: ReactionType;
                        targetCastId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                        targetUrl?: string | undefined;
                    } & {
                        type?: ReactionType;
                        targetCastId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_227 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                        targetUrl?: string | undefined;
                    } & { [K_228 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                    verificationAddEthAddressBody?: ({
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & {
                        address?: Uint8Array;
                        ethSignature?: Uint8Array;
                        blockHash?: Uint8Array;
                        verificationType?: number;
                        chainId?: number;
                    } & { [K_229 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                    verificationRemoveBody?: ({
                        address?: Uint8Array;
                    } & {
                        address?: Uint8Array;
                    } & { [K_230 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                    userDataBody?: ({
                        type?: UserDataType;
                        value?: string;
                    } & {
                        type?: UserDataType;
                        value?: string;
                    } & { [K_231 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                    linkBody?: ({
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & {
                        type?: string;
                        displayTimestamp?: number | undefined;
                        targetQid?: number | undefined;
                    } & { [K_232 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                    usernameProofBody?: ({
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & {
                        timestamp?: number;
                        name?: Uint8Array;
                        owner?: Uint8Array;
                        signature?: Uint8Array;
                        qid?: number;
                        type?: UserNameType;
                    } & { [K_233 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
                } & { [K_234 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"]["data"], keyof MessageData>]: never; }) | undefined;
                hash?: Uint8Array;
                hashScheme?: HashScheme;
                signature?: Uint8Array;
                signatureScheme?: SignatureScheme;
                signer?: Uint8Array;
                dataBytes?: Uint8Array | undefined;
            } & { [K_235 in Exclude<keyof I_1["mergeUsernameProofBody"]["deletedUsernameProofMessage"], keyof Message>]: never; }) | undefined;
        } & { [K_236 in Exclude<keyof I_1["mergeUsernameProofBody"], keyof MergeUserNameProofBody>]: never; }) | undefined;
        mergeOnChainEventBody?: ({
            onChainEvent?: {
                type?: OnChainEventType;
                chainId?: number;
                blockNumber?: number;
                blockHash?: Uint8Array;
                blockTimestamp?: number;
                transactionHash?: Uint8Array;
                logIndex?: number;
                qid?: number;
                signerEventBody?: {
                    key?: Uint8Array;
                    keyType?: number;
                    eventType?: SignerEventType;
                    metadata?: Uint8Array;
                    metadataType?: number;
                } | undefined;
                signerMigratedEventBody?: {
                    migratedAt?: number;
                } | undefined;
                idRegisterEventBody?: {
                    to?: Uint8Array;
                    eventType?: IdRegisterEventType;
                    from?: Uint8Array;
                    recoveryAddress?: Uint8Array;
                } | undefined;
                storageRentEventBody?: {
                    payer?: Uint8Array;
                    units?: number;
                    expiry?: number;
                } | undefined;
                txIndex?: number;
                version?: number;
            } | undefined;
        } & {
            onChainEvent?: ({
                type?: OnChainEventType;
                chainId?: number;
                blockNumber?: number;
                blockHash?: Uint8Array;
                blockTimestamp?: number;
                transactionHash?: Uint8Array;
                logIndex?: number;
                qid?: number;
                signerEventBody?: {
                    key?: Uint8Array;
                    keyType?: number;
                    eventType?: SignerEventType;
                    metadata?: Uint8Array;
                    metadataType?: number;
                } | undefined;
                signerMigratedEventBody?: {
                    migratedAt?: number;
                } | undefined;
                idRegisterEventBody?: {
                    to?: Uint8Array;
                    eventType?: IdRegisterEventType;
                    from?: Uint8Array;
                    recoveryAddress?: Uint8Array;
                } | undefined;
                storageRentEventBody?: {
                    payer?: Uint8Array;
                    units?: number;
                    expiry?: number;
                } | undefined;
                txIndex?: number;
                version?: number;
            } & {
                type?: OnChainEventType;
                chainId?: number;
                blockNumber?: number;
                blockHash?: Uint8Array;
                blockTimestamp?: number;
                transactionHash?: Uint8Array;
                logIndex?: number;
                qid?: number;
                signerEventBody?: ({
                    key?: Uint8Array;
                    keyType?: number;
                    eventType?: SignerEventType;
                    metadata?: Uint8Array;
                    metadataType?: number;
                } & {
                    key?: Uint8Array;
                    keyType?: number;
                    eventType?: SignerEventType;
                    metadata?: Uint8Array;
                    metadataType?: number;
                } & { [K_237 in Exclude<keyof I_1["mergeOnChainEventBody"]["onChainEvent"]["signerEventBody"], keyof SignerEventBody>]: never; }) | undefined;
                signerMigratedEventBody?: ({
                    migratedAt?: number;
                } & {
                    migratedAt?: number;
                } & { [K_238 in Exclude<keyof I_1["mergeOnChainEventBody"]["onChainEvent"]["signerMigratedEventBody"], "migratedAt">]: never; }) | undefined;
                idRegisterEventBody?: ({
                    to?: Uint8Array;
                    eventType?: IdRegisterEventType;
                    from?: Uint8Array;
                    recoveryAddress?: Uint8Array;
                } & {
                    to?: Uint8Array;
                    eventType?: IdRegisterEventType;
                    from?: Uint8Array;
                    recoveryAddress?: Uint8Array;
                } & { [K_239 in Exclude<keyof I_1["mergeOnChainEventBody"]["onChainEvent"]["idRegisterEventBody"], keyof IdRegisterEventBody>]: never; }) | undefined;
                storageRentEventBody?: ({
                    payer?: Uint8Array;
                    units?: number;
                    expiry?: number;
                } & {
                    payer?: Uint8Array;
                    units?: number;
                    expiry?: number;
                } & { [K_240 in Exclude<keyof I_1["mergeOnChainEventBody"]["onChainEvent"]["storageRentEventBody"], keyof StorageRentEventBody>]: never; }) | undefined;
                txIndex?: number;
                version?: number;
            } & { [K_241 in Exclude<keyof I_1["mergeOnChainEventBody"]["onChainEvent"], keyof OnChainEvent>]: never; }) | undefined;
        } & { [K_242 in Exclude<keyof I_1["mergeOnChainEventBody"], "onChainEvent">]: never; }) | undefined;
    } & { [K_243 in Exclude<keyof I_1, keyof HubEvent>]: never; }>(object: I_1): HubEvent;
};

interface HubState {
    /** uint32 last_eth_block = 1; // Deprecated */
    lastQnameProof: number;
    /** bool syncEvents = 4; // Deprecated */
    lastL2Block: number;
}
declare const HubState: {
    encode(message: HubState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HubState;
    fromJSON(object: any): HubState;
    toJSON(message: HubState): unknown;
    create<I extends {
        lastQnameProof?: number;
        lastL2Block?: number;
    } & {
        lastQnameProof?: number;
        lastL2Block?: number;
    } & { [K in Exclude<keyof I, keyof HubState>]: never; }>(base?: I | undefined): HubState;
    fromPartial<I_1 extends {
        lastQnameProof?: number;
        lastL2Block?: number;
    } & {
        lastQnameProof?: number;
        lastL2Block?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof HubState>]: never; }>(object: I_1): HubState;
};

interface RevokeMessagesBySignerJobPayload {
    qid: number;
    signer: Uint8Array;
}
declare const RevokeMessagesBySignerJobPayload: {
    encode(message: RevokeMessagesBySignerJobPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevokeMessagesBySignerJobPayload;
    fromJSON(object: any): RevokeMessagesBySignerJobPayload;
    toJSON(message: RevokeMessagesBySignerJobPayload): unknown;
    create<I extends {
        qid?: number;
        signer?: Uint8Array;
    } & {
        qid?: number;
        signer?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof RevokeMessagesBySignerJobPayload>]: never; }>(base?: I | undefined): RevokeMessagesBySignerJobPayload;
    fromPartial<I_1 extends {
        qid?: number;
        signer?: Uint8Array;
    } & {
        qid?: number;
        signer?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, keyof RevokeMessagesBySignerJobPayload>]: never; }>(object: I_1): RevokeMessagesBySignerJobPayload;
};
interface UpdateNameRegistryEventExpiryJobPayload {
    qname: Uint8Array;
}
declare const UpdateNameRegistryEventExpiryJobPayload: {
    encode(message: UpdateNameRegistryEventExpiryJobPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNameRegistryEventExpiryJobPayload;
    fromJSON(object: any): UpdateNameRegistryEventExpiryJobPayload;
    toJSON(message: UpdateNameRegistryEventExpiryJobPayload): unknown;
    create<I extends {
        qname?: Uint8Array;
    } & {
        qname?: Uint8Array;
    } & { [K in Exclude<keyof I, "qname">]: never; }>(base?: I | undefined): UpdateNameRegistryEventExpiryJobPayload;
    fromPartial<I_1 extends {
        qname?: Uint8Array;
    } & {
        qname?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "qname">]: never; }>(object: I_1): UpdateNameRegistryEventExpiryJobPayload;
};

interface DbTrieNode {
    key: Uint8Array;
    childChars: number[];
    items: number;
    hash: Uint8Array;
}
declare const DbTrieNode: {
    encode(message: DbTrieNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DbTrieNode;
    fromJSON(object: any): DbTrieNode;
    toJSON(message: DbTrieNode): unknown;
    create<I extends {
        key?: Uint8Array;
        childChars?: number[];
        items?: number;
        hash?: Uint8Array;
    } & {
        key?: Uint8Array;
        childChars?: number[] & number[] & { [K in Exclude<keyof I["childChars"], keyof number[]>]: never; };
        items?: number;
        hash?: Uint8Array;
    } & { [K_1 in Exclude<keyof I, keyof DbTrieNode>]: never; }>(base?: I | undefined): DbTrieNode;
    fromPartial<I_1 extends {
        key?: Uint8Array;
        childChars?: number[];
        items?: number;
        hash?: Uint8Array;
    } & {
        key?: Uint8Array;
        childChars?: number[] & number[] & { [K_2 in Exclude<keyof I_1["childChars"], keyof number[]>]: never; };
        items?: number;
        hash?: Uint8Array;
    } & { [K_3 in Exclude<keyof I_1, keyof DbTrieNode>]: never; }>(object: I_1): DbTrieNode;
};

declare enum StoreType {
    NONE = 0,
    CASTS = 1,
    LINKS = 2,
    REACTIONS = 3,
    USER_DATA = 4,
    VERIFICATIONS = 5,
    USERNAME_PROOFS = 6
}
declare function storeTypeFromJSON(object: any): StoreType;
declare function storeTypeToJSON(object: StoreType): string;
interface Empty {
}
declare const Empty: {
    encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Empty;
    fromJSON(_: any): Empty;
    toJSON(_: Empty): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): Empty;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): Empty;
};
interface SubscribeRequest {
    eventTypes: HubEventType[];
    fromId?: number | undefined;
}
declare const SubscribeRequest: {
    encode(message: SubscribeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest;
    fromJSON(object: any): SubscribeRequest;
    toJSON(message: SubscribeRequest): unknown;
    create<I extends {
        eventTypes?: HubEventType[];
        fromId?: number | undefined;
    } & {
        eventTypes?: HubEventType[] & HubEventType[] & { [K in Exclude<keyof I["eventTypes"], keyof HubEventType[]>]: never; };
        fromId?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SubscribeRequest>]: never; }>(base?: I | undefined): SubscribeRequest;
    fromPartial<I_1 extends {
        eventTypes?: HubEventType[];
        fromId?: number | undefined;
    } & {
        eventTypes?: HubEventType[] & HubEventType[] & { [K_2 in Exclude<keyof I_1["eventTypes"], keyof HubEventType[]>]: never; };
        fromId?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SubscribeRequest>]: never; }>(object: I_1): SubscribeRequest;
};
interface EventRequest {
    id: number;
}
declare const EventRequest: {
    encode(message: EventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRequest;
    fromJSON(object: any): EventRequest;
    toJSON(message: EventRequest): unknown;
    create<I extends {
        id?: number;
    } & {
        id?: number;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): EventRequest;
    fromPartial<I_1 extends {
        id?: number;
    } & {
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): EventRequest;
};
interface HubInfoRequest {
    dbStats: boolean;
}
declare const HubInfoRequest: {
    encode(message: HubInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HubInfoRequest;
    fromJSON(object: any): HubInfoRequest;
    toJSON(message: HubInfoRequest): unknown;
    create<I extends {
        dbStats?: boolean;
    } & {
        dbStats?: boolean;
    } & { [K in Exclude<keyof I, "dbStats">]: never; }>(base?: I | undefined): HubInfoRequest;
    fromPartial<I_1 extends {
        dbStats?: boolean;
    } & {
        dbStats?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "dbStats">]: never; }>(object: I_1): HubInfoRequest;
};
/** Response Types for the Sync RPC Methods */
interface HubInfoResponse {
    version: string;
    isSyncing: boolean;
    nickname: string;
    rootHash: string;
    dbStats: DbStats | undefined;
    peerId: string;
    hubOperatorQid: number;
}
declare const HubInfoResponse: {
    encode(message: HubInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HubInfoResponse;
    fromJSON(object: any): HubInfoResponse;
    toJSON(message: HubInfoResponse): unknown;
    create<I extends {
        version?: string;
        isSyncing?: boolean;
        nickname?: string;
        rootHash?: string;
        dbStats?: {
            numMessages?: number;
            numQidEvents?: number;
            numQnameEvents?: number;
        } | undefined;
        peerId?: string;
        hubOperatorQid?: number;
    } & {
        version?: string;
        isSyncing?: boolean;
        nickname?: string;
        rootHash?: string;
        dbStats?: ({
            numMessages?: number;
            numQidEvents?: number;
            numQnameEvents?: number;
        } & {
            numMessages?: number;
            numQidEvents?: number;
            numQnameEvents?: number;
        } & { [K in Exclude<keyof I["dbStats"], keyof DbStats>]: never; }) | undefined;
        peerId?: string;
        hubOperatorQid?: number;
    } & { [K_1 in Exclude<keyof I, keyof HubInfoResponse>]: never; }>(base?: I | undefined): HubInfoResponse;
    fromPartial<I_1 extends {
        version?: string;
        isSyncing?: boolean;
        nickname?: string;
        rootHash?: string;
        dbStats?: {
            numMessages?: number;
            numQidEvents?: number;
            numQnameEvents?: number;
        } | undefined;
        peerId?: string;
        hubOperatorQid?: number;
    } & {
        version?: string;
        isSyncing?: boolean;
        nickname?: string;
        rootHash?: string;
        dbStats?: ({
            numMessages?: number;
            numQidEvents?: number;
            numQnameEvents?: number;
        } & {
            numMessages?: number;
            numQidEvents?: number;
            numQnameEvents?: number;
        } & { [K_2 in Exclude<keyof I_1["dbStats"], keyof DbStats>]: never; }) | undefined;
        peerId?: string;
        hubOperatorQid?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof HubInfoResponse>]: never; }>(object: I_1): HubInfoResponse;
};
interface DbStats {
    numMessages: number;
    numQidEvents: number;
    numQnameEvents: number;
}
declare const DbStats: {
    encode(message: DbStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DbStats;
    fromJSON(object: any): DbStats;
    toJSON(message: DbStats): unknown;
    create<I extends {
        numMessages?: number;
        numQidEvents?: number;
        numQnameEvents?: number;
    } & {
        numMessages?: number;
        numQidEvents?: number;
        numQnameEvents?: number;
    } & { [K in Exclude<keyof I, keyof DbStats>]: never; }>(base?: I | undefined): DbStats;
    fromPartial<I_1 extends {
        numMessages?: number;
        numQidEvents?: number;
        numQnameEvents?: number;
    } & {
        numMessages?: number;
        numQidEvents?: number;
        numQnameEvents?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof DbStats>]: never; }>(object: I_1): DbStats;
};
interface SyncStatusRequest {
    peerId?: string | undefined;
}
declare const SyncStatusRequest: {
    encode(message: SyncStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyncStatusRequest;
    fromJSON(object: any): SyncStatusRequest;
    toJSON(message: SyncStatusRequest): unknown;
    create<I extends {
        peerId?: string | undefined;
    } & {
        peerId?: string | undefined;
    } & { [K in Exclude<keyof I, "peerId">]: never; }>(base?: I | undefined): SyncStatusRequest;
    fromPartial<I_1 extends {
        peerId?: string | undefined;
    } & {
        peerId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "peerId">]: never; }>(object: I_1): SyncStatusRequest;
};
interface SyncStatusResponse {
    isSyncing: boolean;
    syncStatus: SyncStatus[];
    engineStarted: boolean;
}
declare const SyncStatusResponse: {
    encode(message: SyncStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyncStatusResponse;
    fromJSON(object: any): SyncStatusResponse;
    toJSON(message: SyncStatusResponse): unknown;
    create<I extends {
        isSyncing?: boolean;
        syncStatus?: {
            peerId?: string;
            inSync?: string;
            shouldSync?: boolean;
            divergencePrefix?: string;
            divergenceSecondsAgo?: number;
            theirMessages?: number;
            ourMessages?: number;
            lastBadSync?: number;
            score?: number;
        }[];
        engineStarted?: boolean;
    } & {
        isSyncing?: boolean;
        syncStatus?: {
            peerId?: string;
            inSync?: string;
            shouldSync?: boolean;
            divergencePrefix?: string;
            divergenceSecondsAgo?: number;
            theirMessages?: number;
            ourMessages?: number;
            lastBadSync?: number;
            score?: number;
        }[] & ({
            peerId?: string;
            inSync?: string;
            shouldSync?: boolean;
            divergencePrefix?: string;
            divergenceSecondsAgo?: number;
            theirMessages?: number;
            ourMessages?: number;
            lastBadSync?: number;
            score?: number;
        } & {
            peerId?: string;
            inSync?: string;
            shouldSync?: boolean;
            divergencePrefix?: string;
            divergenceSecondsAgo?: number;
            theirMessages?: number;
            ourMessages?: number;
            lastBadSync?: number;
            score?: number;
        } & { [K in Exclude<keyof I["syncStatus"][number], keyof SyncStatus>]: never; })[] & { [K_1 in Exclude<keyof I["syncStatus"], keyof {
            peerId?: string;
            inSync?: string;
            shouldSync?: boolean;
            divergencePrefix?: string;
            divergenceSecondsAgo?: number;
            theirMessages?: number;
            ourMessages?: number;
            lastBadSync?: number;
            score?: number;
        }[]>]: never; };
        engineStarted?: boolean;
    } & { [K_2 in Exclude<keyof I, keyof SyncStatusResponse>]: never; }>(base?: I | undefined): SyncStatusResponse;
    fromPartial<I_1 extends {
        isSyncing?: boolean;
        syncStatus?: {
            peerId?: string;
            inSync?: string;
            shouldSync?: boolean;
            divergencePrefix?: string;
            divergenceSecondsAgo?: number;
            theirMessages?: number;
            ourMessages?: number;
            lastBadSync?: number;
            score?: number;
        }[];
        engineStarted?: boolean;
    } & {
        isSyncing?: boolean;
        syncStatus?: {
            peerId?: string;
            inSync?: string;
            shouldSync?: boolean;
            divergencePrefix?: string;
            divergenceSecondsAgo?: number;
            theirMessages?: number;
            ourMessages?: number;
            lastBadSync?: number;
            score?: number;
        }[] & ({
            peerId?: string;
            inSync?: string;
            shouldSync?: boolean;
            divergencePrefix?: string;
            divergenceSecondsAgo?: number;
            theirMessages?: number;
            ourMessages?: number;
            lastBadSync?: number;
            score?: number;
        } & {
            peerId?: string;
            inSync?: string;
            shouldSync?: boolean;
            divergencePrefix?: string;
            divergenceSecondsAgo?: number;
            theirMessages?: number;
            ourMessages?: number;
            lastBadSync?: number;
            score?: number;
        } & { [K_3 in Exclude<keyof I_1["syncStatus"][number], keyof SyncStatus>]: never; })[] & { [K_4 in Exclude<keyof I_1["syncStatus"], keyof {
            peerId?: string;
            inSync?: string;
            shouldSync?: boolean;
            divergencePrefix?: string;
            divergenceSecondsAgo?: number;
            theirMessages?: number;
            ourMessages?: number;
            lastBadSync?: number;
            score?: number;
        }[]>]: never; };
        engineStarted?: boolean;
    } & { [K_5 in Exclude<keyof I_1, keyof SyncStatusResponse>]: never; }>(object: I_1): SyncStatusResponse;
};
interface SyncStatus {
    peerId: string;
    inSync: string;
    shouldSync: boolean;
    divergencePrefix: string;
    divergenceSecondsAgo: number;
    theirMessages: number;
    ourMessages: number;
    lastBadSync: number;
    score: number;
}
declare const SyncStatus: {
    encode(message: SyncStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyncStatus;
    fromJSON(object: any): SyncStatus;
    toJSON(message: SyncStatus): unknown;
    create<I extends {
        peerId?: string;
        inSync?: string;
        shouldSync?: boolean;
        divergencePrefix?: string;
        divergenceSecondsAgo?: number;
        theirMessages?: number;
        ourMessages?: number;
        lastBadSync?: number;
        score?: number;
    } & {
        peerId?: string;
        inSync?: string;
        shouldSync?: boolean;
        divergencePrefix?: string;
        divergenceSecondsAgo?: number;
        theirMessages?: number;
        ourMessages?: number;
        lastBadSync?: number;
        score?: number;
    } & { [K in Exclude<keyof I, keyof SyncStatus>]: never; }>(base?: I | undefined): SyncStatus;
    fromPartial<I_1 extends {
        peerId?: string;
        inSync?: string;
        shouldSync?: boolean;
        divergencePrefix?: string;
        divergenceSecondsAgo?: number;
        theirMessages?: number;
        ourMessages?: number;
        lastBadSync?: number;
        score?: number;
    } & {
        peerId?: string;
        inSync?: string;
        shouldSync?: boolean;
        divergencePrefix?: string;
        divergenceSecondsAgo?: number;
        theirMessages?: number;
        ourMessages?: number;
        lastBadSync?: number;
        score?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof SyncStatus>]: never; }>(object: I_1): SyncStatus;
};
interface TrieNodeMetadataResponse {
    prefix: Uint8Array;
    numMessages: number;
    hash: string;
    children: TrieNodeMetadataResponse[];
}
declare const TrieNodeMetadataResponse: {
    encode(message: TrieNodeMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrieNodeMetadataResponse;
    fromJSON(object: any): TrieNodeMetadataResponse;
    toJSON(message: TrieNodeMetadataResponse): unknown;
    create<I extends {
        prefix?: Uint8Array;
        numMessages?: number;
        hash?: string;
        children?: any[];
    } & {
        prefix?: Uint8Array;
        numMessages?: number;
        hash?: string;
        children?: any[] & ({
            prefix?: Uint8Array;
            numMessages?: number;
            hash?: string;
            children?: any[];
        } & {
            prefix?: Uint8Array;
            numMessages?: number;
            hash?: string;
            children?: any[] & ({
                prefix?: Uint8Array;
                numMessages?: number;
                hash?: string;
                children?: any[];
            } & {
                prefix?: Uint8Array;
                numMessages?: number;
                hash?: string;
                children?: any[] & ({
                    prefix?: Uint8Array;
                    numMessages?: number;
                    hash?: string;
                    children?: any[];
                } & {
                    prefix?: Uint8Array;
                    numMessages?: number;
                    hash?: string;
                    children?: any[] & ({
                        prefix?: Uint8Array;
                        numMessages?: number;
                        hash?: string;
                        children?: any[];
                    } & {
                        prefix?: Uint8Array;
                        numMessages?: number;
                        hash?: string;
                        children?: any[] & ({
                            prefix?: Uint8Array;
                            numMessages?: number;
                            hash?: string;
                            children?: any[];
                        } & {
                            prefix?: Uint8Array;
                            numMessages?: number;
                            hash?: string;
                            children?: any[] & ({
                                prefix?: Uint8Array;
                                numMessages?: number;
                                hash?: string;
                                children?: any[];
                            } & {
                                prefix?: Uint8Array;
                                numMessages?: number;
                                hash?: string;
                                children?: any[] & ({
                                    prefix?: Uint8Array;
                                    numMessages?: number;
                                    hash?: string;
                                    children?: any[];
                                } & {
                                    prefix?: Uint8Array;
                                    numMessages?: number;
                                    hash?: string;
                                    children?: any[] & ({
                                        prefix?: Uint8Array;
                                        numMessages?: number;
                                        hash?: string;
                                        children?: any[];
                                    } & {
                                        prefix?: Uint8Array;
                                        numMessages?: number;
                                        hash?: string;
                                        children?: any[] & ({
                                            prefix?: Uint8Array;
                                            numMessages?: number;
                                            hash?: string;
                                            children?: any[];
                                        } & {
                                            prefix?: Uint8Array;
                                            numMessages?: number;
                                            hash?: string;
                                            children?: any[] & ({
                                                prefix?: Uint8Array;
                                                numMessages?: number;
                                                hash?: string;
                                                children?: any[];
                                            } & {
                                                prefix?: Uint8Array;
                                                numMessages?: number;
                                                hash?: string;
                                                children?: any[] & ({
                                                    prefix?: Uint8Array;
                                                    numMessages?: number;
                                                    hash?: string;
                                                    children?: any[];
                                                } & any & { [K in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_1 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                                            } & { [K_2 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_3 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                                        } & { [K_4 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_5 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                                    } & { [K_6 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_7 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                                } & { [K_8 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_9 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                            } & { [K_10 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_11 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                        } & { [K_12 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_13 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                    } & { [K_14 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_15 in Exclude<keyof I["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                } & { [K_16 in Exclude<keyof I["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_17 in Exclude<keyof I["children"][number]["children"][number]["children"], keyof any[]>]: never; };
            } & { [K_18 in Exclude<keyof I["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_19 in Exclude<keyof I["children"][number]["children"], keyof any[]>]: never; };
        } & { [K_20 in Exclude<keyof I["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_21 in Exclude<keyof I["children"], keyof any[]>]: never; };
    } & { [K_22 in Exclude<keyof I, keyof TrieNodeMetadataResponse>]: never; }>(base?: I | undefined): TrieNodeMetadataResponse;
    fromPartial<I_1 extends {
        prefix?: Uint8Array;
        numMessages?: number;
        hash?: string;
        children?: any[];
    } & {
        prefix?: Uint8Array;
        numMessages?: number;
        hash?: string;
        children?: any[] & ({
            prefix?: Uint8Array;
            numMessages?: number;
            hash?: string;
            children?: any[];
        } & {
            prefix?: Uint8Array;
            numMessages?: number;
            hash?: string;
            children?: any[] & ({
                prefix?: Uint8Array;
                numMessages?: number;
                hash?: string;
                children?: any[];
            } & {
                prefix?: Uint8Array;
                numMessages?: number;
                hash?: string;
                children?: any[] & ({
                    prefix?: Uint8Array;
                    numMessages?: number;
                    hash?: string;
                    children?: any[];
                } & {
                    prefix?: Uint8Array;
                    numMessages?: number;
                    hash?: string;
                    children?: any[] & ({
                        prefix?: Uint8Array;
                        numMessages?: number;
                        hash?: string;
                        children?: any[];
                    } & {
                        prefix?: Uint8Array;
                        numMessages?: number;
                        hash?: string;
                        children?: any[] & ({
                            prefix?: Uint8Array;
                            numMessages?: number;
                            hash?: string;
                            children?: any[];
                        } & {
                            prefix?: Uint8Array;
                            numMessages?: number;
                            hash?: string;
                            children?: any[] & ({
                                prefix?: Uint8Array;
                                numMessages?: number;
                                hash?: string;
                                children?: any[];
                            } & {
                                prefix?: Uint8Array;
                                numMessages?: number;
                                hash?: string;
                                children?: any[] & ({
                                    prefix?: Uint8Array;
                                    numMessages?: number;
                                    hash?: string;
                                    children?: any[];
                                } & {
                                    prefix?: Uint8Array;
                                    numMessages?: number;
                                    hash?: string;
                                    children?: any[] & ({
                                        prefix?: Uint8Array;
                                        numMessages?: number;
                                        hash?: string;
                                        children?: any[];
                                    } & {
                                        prefix?: Uint8Array;
                                        numMessages?: number;
                                        hash?: string;
                                        children?: any[] & ({
                                            prefix?: Uint8Array;
                                            numMessages?: number;
                                            hash?: string;
                                            children?: any[];
                                        } & {
                                            prefix?: Uint8Array;
                                            numMessages?: number;
                                            hash?: string;
                                            children?: any[] & ({
                                                prefix?: Uint8Array;
                                                numMessages?: number;
                                                hash?: string;
                                                children?: any[];
                                            } & {
                                                prefix?: Uint8Array;
                                                numMessages?: number;
                                                hash?: string;
                                                children?: any[] & ({
                                                    prefix?: Uint8Array;
                                                    numMessages?: number;
                                                    hash?: string;
                                                    children?: any[];
                                                } & any & { [K_23 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_24 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                                            } & { [K_25 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_26 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                                        } & { [K_27 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_28 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                                    } & { [K_29 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_30 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                                } & { [K_31 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_32 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                            } & { [K_33 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_34 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                        } & { [K_35 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_36 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                    } & { [K_37 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_38 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number]["children"], keyof any[]>]: never; };
                } & { [K_39 in Exclude<keyof I_1["children"][number]["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_40 in Exclude<keyof I_1["children"][number]["children"][number]["children"], keyof any[]>]: never; };
            } & { [K_41 in Exclude<keyof I_1["children"][number]["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_42 in Exclude<keyof I_1["children"][number]["children"], keyof any[]>]: never; };
        } & { [K_43 in Exclude<keyof I_1["children"][number], keyof TrieNodeMetadataResponse>]: never; })[] & { [K_44 in Exclude<keyof I_1["children"], keyof any[]>]: never; };
    } & { [K_45 in Exclude<keyof I_1, keyof TrieNodeMetadataResponse>]: never; }>(object: I_1): TrieNodeMetadataResponse;
};
interface TrieNodeSnapshotResponse {
    prefix: Uint8Array;
    excludedHashes: string[];
    numMessages: number;
    rootHash: string;
}
declare const TrieNodeSnapshotResponse: {
    encode(message: TrieNodeSnapshotResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrieNodeSnapshotResponse;
    fromJSON(object: any): TrieNodeSnapshotResponse;
    toJSON(message: TrieNodeSnapshotResponse): unknown;
    create<I extends {
        prefix?: Uint8Array;
        excludedHashes?: string[];
        numMessages?: number;
        rootHash?: string;
    } & {
        prefix?: Uint8Array;
        excludedHashes?: string[] & string[] & { [K in Exclude<keyof I["excludedHashes"], keyof string[]>]: never; };
        numMessages?: number;
        rootHash?: string;
    } & { [K_1 in Exclude<keyof I, keyof TrieNodeSnapshotResponse>]: never; }>(base?: I | undefined): TrieNodeSnapshotResponse;
    fromPartial<I_1 extends {
        prefix?: Uint8Array;
        excludedHashes?: string[];
        numMessages?: number;
        rootHash?: string;
    } & {
        prefix?: Uint8Array;
        excludedHashes?: string[] & string[] & { [K_2 in Exclude<keyof I_1["excludedHashes"], keyof string[]>]: never; };
        numMessages?: number;
        rootHash?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof TrieNodeSnapshotResponse>]: never; }>(object: I_1): TrieNodeSnapshotResponse;
};
interface TrieNodePrefix {
    prefix: Uint8Array;
}
declare const TrieNodePrefix: {
    encode(message: TrieNodePrefix, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrieNodePrefix;
    fromJSON(object: any): TrieNodePrefix;
    toJSON(message: TrieNodePrefix): unknown;
    create<I extends {
        prefix?: Uint8Array;
    } & {
        prefix?: Uint8Array;
    } & { [K in Exclude<keyof I, "prefix">]: never; }>(base?: I | undefined): TrieNodePrefix;
    fromPartial<I_1 extends {
        prefix?: Uint8Array;
    } & {
        prefix?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "prefix">]: never; }>(object: I_1): TrieNodePrefix;
};
interface SyncIds {
    syncIds: Uint8Array[];
}
declare const SyncIds: {
    encode(message: SyncIds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyncIds;
    fromJSON(object: any): SyncIds;
    toJSON(message: SyncIds): unknown;
    create<I extends {
        syncIds?: Uint8Array[];
    } & {
        syncIds?: Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["syncIds"], keyof Uint8Array[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "syncIds">]: never; }>(base?: I | undefined): SyncIds;
    fromPartial<I_1 extends {
        syncIds?: Uint8Array[];
    } & {
        syncIds?: Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I_1["syncIds"], keyof Uint8Array[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "syncIds">]: never; }>(object: I_1): SyncIds;
};
interface QidRequest {
    qid: number;
    pageSize?: number | undefined;
    pageToken?: Uint8Array | undefined;
    reverse?: boolean | undefined;
}
declare const QidRequest: {
    encode(message: QidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QidRequest;
    fromJSON(object: any): QidRequest;
    toJSON(message: QidRequest): unknown;
    create<I extends {
        qid?: number;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        qid?: number;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof QidRequest>]: never; }>(base?: I | undefined): QidRequest;
    fromPartial<I_1 extends {
        qid?: number;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        qid?: number;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QidRequest>]: never; }>(object: I_1): QidRequest;
};
interface QidsRequest {
    pageSize?: number | undefined;
    pageToken?: Uint8Array | undefined;
    reverse?: boolean | undefined;
}
declare const QidsRequest: {
    encode(message: QidsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QidsRequest;
    fromJSON(object: any): QidsRequest;
    toJSON(message: QidsRequest): unknown;
    create<I extends {
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof QidsRequest>]: never; }>(base?: I | undefined): QidsRequest;
    fromPartial<I_1 extends {
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QidsRequest>]: never; }>(object: I_1): QidsRequest;
};
interface QidsResponse {
    qids: number[];
    nextPageToken?: Uint8Array | undefined;
}
declare const QidsResponse: {
    encode(message: QidsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QidsResponse;
    fromJSON(object: any): QidsResponse;
    toJSON(message: QidsResponse): unknown;
    create<I extends {
        qids?: number[];
        nextPageToken?: Uint8Array | undefined;
    } & {
        qids?: number[] & number[] & { [K in Exclude<keyof I["qids"], keyof number[]>]: never; };
        nextPageToken?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QidsResponse>]: never; }>(base?: I | undefined): QidsResponse;
    fromPartial<I_1 extends {
        qids?: number[];
        nextPageToken?: Uint8Array | undefined;
    } & {
        qids?: number[] & number[] & { [K_2 in Exclude<keyof I_1["qids"], keyof number[]>]: never; };
        nextPageToken?: Uint8Array | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof QidsResponse>]: never; }>(object: I_1): QidsResponse;
};
interface MessagesResponse {
    messages: Message[];
    nextPageToken?: Uint8Array | undefined;
}
declare const MessagesResponse: {
    encode(message: MessagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessagesResponse;
    fromJSON(object: any): MessagesResponse;
    toJSON(message: MessagesResponse): unknown;
    create<I extends {
        messages?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[];
        nextPageToken?: Uint8Array | undefined;
    } & {
        messages?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[] & ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K in Exclude<keyof I["messages"][number]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_1 in Exclude<keyof I["messages"][number]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_2 in Exclude<keyof I["messages"][number]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_3 in Exclude<keyof I["messages"][number]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_4 in Exclude<keyof I["messages"][number]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["messages"][number]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_6 in Exclude<keyof I["messages"][number]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_7 in Exclude<keyof I["messages"][number]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_8 in Exclude<keyof I["messages"][number]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_9 in Exclude<keyof I["messages"][number]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_10 in Exclude<keyof I["messages"][number]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_11 in Exclude<keyof I["messages"][number]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_12 in Exclude<keyof I["messages"][number]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_13 in Exclude<keyof I["messages"][number]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_14 in Exclude<keyof I["messages"][number]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_15 in Exclude<keyof I["messages"][number]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["messages"][number]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_17 in Exclude<keyof I["messages"][number], keyof Message>]: never; })[] & { [K_18 in Exclude<keyof I["messages"], keyof {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[]>]: never; };
        nextPageToken?: Uint8Array | undefined;
    } & { [K_19 in Exclude<keyof I, keyof MessagesResponse>]: never; }>(base?: I | undefined): MessagesResponse;
    fromPartial<I_1 extends {
        messages?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[];
        nextPageToken?: Uint8Array | undefined;
    } & {
        messages?: {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[] & ({
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & {
            data?: ({
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } & {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: ({
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } & {
                    embedsDeprecated?: string[] & string[] & { [K_20 in Exclude<keyof I_1["messages"][number]["data"]["castAddBody"]["embedsDeprecated"], keyof string[]>]: never; };
                    mentions?: number[] & number[] & { [K_21 in Exclude<keyof I_1["messages"][number]["data"]["castAddBody"]["mentions"], keyof number[]>]: never; };
                    parentCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_22 in Exclude<keyof I_1["messages"][number]["data"]["castAddBody"]["parentCastId"], keyof CastId>]: never; }) | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[] & number[] & { [K_23 in Exclude<keyof I_1["messages"][number]["data"]["castAddBody"]["mentionsPositions"], keyof number[]>]: never; };
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[] & ({
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    } & {
                        url?: string | undefined;
                        castId?: ({
                            qid?: number;
                            hash?: Uint8Array;
                        } & {
                            qid?: number;
                            hash?: Uint8Array;
                        } & { [K_24 in Exclude<keyof I_1["messages"][number]["data"]["castAddBody"]["embeds"][number]["castId"], keyof CastId>]: never; }) | undefined;
                    } & { [K_25 in Exclude<keyof I_1["messages"][number]["data"]["castAddBody"]["embeds"][number], keyof Embed>]: never; })[] & { [K_26 in Exclude<keyof I_1["messages"][number]["data"]["castAddBody"]["embeds"], keyof {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[]>]: never; };
                } & { [K_27 in Exclude<keyof I_1["messages"][number]["data"]["castAddBody"], keyof CastAddBody>]: never; }) | undefined;
                castRemoveBody?: ({
                    targetHash?: Uint8Array;
                } & {
                    targetHash?: Uint8Array;
                } & { [K_28 in Exclude<keyof I_1["messages"][number]["data"]["castRemoveBody"], "targetHash">]: never; }) | undefined;
                reactionBody?: ({
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } & {
                    type?: ReactionType;
                    targetCastId?: ({
                        qid?: number;
                        hash?: Uint8Array;
                    } & {
                        qid?: number;
                        hash?: Uint8Array;
                    } & { [K_29 in Exclude<keyof I_1["messages"][number]["data"]["reactionBody"]["targetCastId"], keyof CastId>]: never; }) | undefined;
                    targetUrl?: string | undefined;
                } & { [K_30 in Exclude<keyof I_1["messages"][number]["data"]["reactionBody"], keyof ReactionBody>]: never; }) | undefined;
                verificationAddEthAddressBody?: ({
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } & { [K_31 in Exclude<keyof I_1["messages"][number]["data"]["verificationAddEthAddressBody"], keyof VerificationAddEthAddressBody>]: never; }) | undefined;
                verificationRemoveBody?: ({
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & { [K_32 in Exclude<keyof I_1["messages"][number]["data"]["verificationRemoveBody"], "address">]: never; }) | undefined;
                userDataBody?: ({
                    type?: UserDataType;
                    value?: string;
                } & {
                    type?: UserDataType;
                    value?: string;
                } & { [K_33 in Exclude<keyof I_1["messages"][number]["data"]["userDataBody"], keyof UserDataBody>]: never; }) | undefined;
                linkBody?: ({
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } & { [K_34 in Exclude<keyof I_1["messages"][number]["data"]["linkBody"], keyof LinkBody>]: never; }) | undefined;
                usernameProofBody?: ({
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } & { [K_35 in Exclude<keyof I_1["messages"][number]["data"]["usernameProofBody"], keyof UserNameProof>]: never; }) | undefined;
            } & { [K_36 in Exclude<keyof I_1["messages"][number]["data"], keyof MessageData>]: never; }) | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        } & { [K_37 in Exclude<keyof I_1["messages"][number], keyof Message>]: never; })[] & { [K_38 in Exclude<keyof I_1["messages"], keyof {
            data?: {
                type?: MessageType;
                qid?: number;
                timestamp?: number;
                network?: OpenrealmNetwork;
                castAddBody?: {
                    embedsDeprecated?: string[];
                    mentions?: number[];
                    parentCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    parentUrl?: string | undefined;
                    text?: string;
                    mentionsPositions?: number[];
                    embeds?: {
                        url?: string | undefined;
                        castId?: {
                            qid?: number;
                            hash?: Uint8Array;
                        } | undefined;
                    }[];
                } | undefined;
                castRemoveBody?: {
                    targetHash?: Uint8Array;
                } | undefined;
                reactionBody?: {
                    type?: ReactionType;
                    targetCastId?: {
                        qid?: number;
                        hash?: Uint8Array;
                    } | undefined;
                    targetUrl?: string | undefined;
                } | undefined;
                verificationAddEthAddressBody?: {
                    address?: Uint8Array;
                    ethSignature?: Uint8Array;
                    blockHash?: Uint8Array;
                    verificationType?: number;
                    chainId?: number;
                } | undefined;
                verificationRemoveBody?: {
                    address?: Uint8Array;
                } | undefined;
                userDataBody?: {
                    type?: UserDataType;
                    value?: string;
                } | undefined;
                linkBody?: {
                    type?: string;
                    displayTimestamp?: number | undefined;
                    targetQid?: number | undefined;
                } | undefined;
                usernameProofBody?: {
                    timestamp?: number;
                    name?: Uint8Array;
                    owner?: Uint8Array;
                    signature?: Uint8Array;
                    qid?: number;
                    type?: UserNameType;
                } | undefined;
            } | undefined;
            hash?: Uint8Array;
            hashScheme?: HashScheme;
            signature?: Uint8Array;
            signatureScheme?: SignatureScheme;
            signer?: Uint8Array;
            dataBytes?: Uint8Array | undefined;
        }[]>]: never; };
        nextPageToken?: Uint8Array | undefined;
    } & { [K_39 in Exclude<keyof I_1, keyof MessagesResponse>]: never; }>(object: I_1): MessagesResponse;
};
interface CastsByParentRequest {
    parentCastId?: CastId | undefined;
    parentUrl?: string | undefined;
    pageSize?: number | undefined;
    pageToken?: Uint8Array | undefined;
    reverse?: boolean | undefined;
}
declare const CastsByParentRequest: {
    encode(message: CastsByParentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CastsByParentRequest;
    fromJSON(object: any): CastsByParentRequest;
    toJSON(message: CastsByParentRequest): unknown;
    create<I extends {
        parentCastId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
        parentUrl?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        parentCastId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K in Exclude<keyof I["parentCastId"], keyof CastId>]: never; }) | undefined;
        parentUrl?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CastsByParentRequest>]: never; }>(base?: I | undefined): CastsByParentRequest;
    fromPartial<I_1 extends {
        parentCastId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
        parentUrl?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        parentCastId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K_2 in Exclude<keyof I_1["parentCastId"], keyof CastId>]: never; }) | undefined;
        parentUrl?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof CastsByParentRequest>]: never; }>(object: I_1): CastsByParentRequest;
};
interface ReactionRequest {
    qid: number;
    reactionType: ReactionType;
    targetCastId?: CastId | undefined;
    targetUrl?: string | undefined;
}
declare const ReactionRequest: {
    encode(message: ReactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactionRequest;
    fromJSON(object: any): ReactionRequest;
    toJSON(message: ReactionRequest): unknown;
    create<I extends {
        qid?: number;
        reactionType?: ReactionType;
        targetCastId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
        targetUrl?: string | undefined;
    } & {
        qid?: number;
        reactionType?: ReactionType;
        targetCastId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K in Exclude<keyof I["targetCastId"], keyof CastId>]: never; }) | undefined;
        targetUrl?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ReactionRequest>]: never; }>(base?: I | undefined): ReactionRequest;
    fromPartial<I_1 extends {
        qid?: number;
        reactionType?: ReactionType;
        targetCastId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
        targetUrl?: string | undefined;
    } & {
        qid?: number;
        reactionType?: ReactionType;
        targetCastId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K_2 in Exclude<keyof I_1["targetCastId"], keyof CastId>]: never; }) | undefined;
        targetUrl?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ReactionRequest>]: never; }>(object: I_1): ReactionRequest;
};
interface ReactionsByQidRequest {
    qid: number;
    reactionType?: ReactionType | undefined;
    pageSize?: number | undefined;
    pageToken?: Uint8Array | undefined;
    reverse?: boolean | undefined;
}
declare const ReactionsByQidRequest: {
    encode(message: ReactionsByQidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactionsByQidRequest;
    fromJSON(object: any): ReactionsByQidRequest;
    toJSON(message: ReactionsByQidRequest): unknown;
    create<I extends {
        qid?: number;
        reactionType?: ReactionType | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        qid?: number;
        reactionType?: ReactionType | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof ReactionsByQidRequest>]: never; }>(base?: I | undefined): ReactionsByQidRequest;
    fromPartial<I_1 extends {
        qid?: number;
        reactionType?: ReactionType | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        qid?: number;
        reactionType?: ReactionType | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ReactionsByQidRequest>]: never; }>(object: I_1): ReactionsByQidRequest;
};
interface ReactionsByTargetRequest {
    targetCastId?: CastId | undefined;
    targetUrl?: string | undefined;
    reactionType?: ReactionType | undefined;
    pageSize?: number | undefined;
    pageToken?: Uint8Array | undefined;
    reverse?: boolean | undefined;
}
declare const ReactionsByTargetRequest: {
    encode(message: ReactionsByTargetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactionsByTargetRequest;
    fromJSON(object: any): ReactionsByTargetRequest;
    toJSON(message: ReactionsByTargetRequest): unknown;
    create<I extends {
        targetCastId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
        targetUrl?: string | undefined;
        reactionType?: ReactionType | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        targetCastId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K in Exclude<keyof I["targetCastId"], keyof CastId>]: never; }) | undefined;
        targetUrl?: string | undefined;
        reactionType?: ReactionType | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ReactionsByTargetRequest>]: never; }>(base?: I | undefined): ReactionsByTargetRequest;
    fromPartial<I_1 extends {
        targetCastId?: {
            qid?: number;
            hash?: Uint8Array;
        } | undefined;
        targetUrl?: string | undefined;
        reactionType?: ReactionType | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        targetCastId?: ({
            qid?: number;
            hash?: Uint8Array;
        } & {
            qid?: number;
            hash?: Uint8Array;
        } & { [K_2 in Exclude<keyof I_1["targetCastId"], keyof CastId>]: never; }) | undefined;
        targetUrl?: string | undefined;
        reactionType?: ReactionType | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ReactionsByTargetRequest>]: never; }>(object: I_1): ReactionsByTargetRequest;
};
interface UserDataRequest {
    qid: number;
    userDataType: UserDataType;
}
declare const UserDataRequest: {
    encode(message: UserDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserDataRequest;
    fromJSON(object: any): UserDataRequest;
    toJSON(message: UserDataRequest): unknown;
    create<I extends {
        qid?: number;
        userDataType?: UserDataType;
    } & {
        qid?: number;
        userDataType?: UserDataType;
    } & { [K in Exclude<keyof I, keyof UserDataRequest>]: never; }>(base?: I | undefined): UserDataRequest;
    fromPartial<I_1 extends {
        qid?: number;
        userDataType?: UserDataType;
    } & {
        qid?: number;
        userDataType?: UserDataType;
    } & { [K_1 in Exclude<keyof I_1, keyof UserDataRequest>]: never; }>(object: I_1): UserDataRequest;
};
interface NameRegistryEventRequest {
    name: Uint8Array;
}
declare const NameRegistryEventRequest: {
    encode(message: NameRegistryEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NameRegistryEventRequest;
    fromJSON(object: any): NameRegistryEventRequest;
    toJSON(message: NameRegistryEventRequest): unknown;
    create<I extends {
        name?: Uint8Array;
    } & {
        name?: Uint8Array;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I | undefined): NameRegistryEventRequest;
    fromPartial<I_1 extends {
        name?: Uint8Array;
    } & {
        name?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): NameRegistryEventRequest;
};
interface RentRegistryEventsRequest {
    qid: number;
}
declare const RentRegistryEventsRequest: {
    encode(message: RentRegistryEventsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RentRegistryEventsRequest;
    fromJSON(object: any): RentRegistryEventsRequest;
    toJSON(message: RentRegistryEventsRequest): unknown;
    create<I extends {
        qid?: number;
    } & {
        qid?: number;
    } & { [K in Exclude<keyof I, "qid">]: never; }>(base?: I | undefined): RentRegistryEventsRequest;
    fromPartial<I_1 extends {
        qid?: number;
    } & {
        qid?: number;
    } & { [K_1 in Exclude<keyof I_1, "qid">]: never; }>(object: I_1): RentRegistryEventsRequest;
};
interface OnChainEventRequest {
    qid: number;
    eventType: OnChainEventType;
    pageSize?: number | undefined;
    pageToken?: Uint8Array | undefined;
    reverse?: boolean | undefined;
}
declare const OnChainEventRequest: {
    encode(message: OnChainEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OnChainEventRequest;
    fromJSON(object: any): OnChainEventRequest;
    toJSON(message: OnChainEventRequest): unknown;
    create<I extends {
        qid?: number;
        eventType?: OnChainEventType;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        qid?: number;
        eventType?: OnChainEventType;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof OnChainEventRequest>]: never; }>(base?: I | undefined): OnChainEventRequest;
    fromPartial<I_1 extends {
        qid?: number;
        eventType?: OnChainEventType;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        qid?: number;
        eventType?: OnChainEventType;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof OnChainEventRequest>]: never; }>(object: I_1): OnChainEventRequest;
};
interface OnChainEventResponse {
    events: OnChainEvent[];
    nextPageToken?: Uint8Array | undefined;
}
declare const OnChainEventResponse: {
    encode(message: OnChainEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OnChainEventResponse;
    fromJSON(object: any): OnChainEventResponse;
    toJSON(message: OnChainEventResponse): unknown;
    create<I extends {
        events?: {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        }[];
        nextPageToken?: Uint8Array | undefined;
    } & {
        events?: {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        }[] & ({
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        } & {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: ({
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } & {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } & { [K in Exclude<keyof I["events"][number]["signerEventBody"], keyof SignerEventBody>]: never; }) | undefined;
            signerMigratedEventBody?: ({
                migratedAt?: number;
            } & {
                migratedAt?: number;
            } & { [K_1 in Exclude<keyof I["events"][number]["signerMigratedEventBody"], "migratedAt">]: never; }) | undefined;
            idRegisterEventBody?: ({
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } & {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } & { [K_2 in Exclude<keyof I["events"][number]["idRegisterEventBody"], keyof IdRegisterEventBody>]: never; }) | undefined;
            storageRentEventBody?: ({
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } & {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } & { [K_3 in Exclude<keyof I["events"][number]["storageRentEventBody"], keyof StorageRentEventBody>]: never; }) | undefined;
            txIndex?: number;
            version?: number;
        } & { [K_4 in Exclude<keyof I["events"][number], keyof OnChainEvent>]: never; })[] & { [K_5 in Exclude<keyof I["events"], keyof {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        }[]>]: never; };
        nextPageToken?: Uint8Array | undefined;
    } & { [K_6 in Exclude<keyof I, keyof OnChainEventResponse>]: never; }>(base?: I | undefined): OnChainEventResponse;
    fromPartial<I_1 extends {
        events?: {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        }[];
        nextPageToken?: Uint8Array | undefined;
    } & {
        events?: {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        }[] & ({
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        } & {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: ({
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } & {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } & { [K_7 in Exclude<keyof I_1["events"][number]["signerEventBody"], keyof SignerEventBody>]: never; }) | undefined;
            signerMigratedEventBody?: ({
                migratedAt?: number;
            } & {
                migratedAt?: number;
            } & { [K_8 in Exclude<keyof I_1["events"][number]["signerMigratedEventBody"], "migratedAt">]: never; }) | undefined;
            idRegisterEventBody?: ({
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } & {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } & { [K_9 in Exclude<keyof I_1["events"][number]["idRegisterEventBody"], keyof IdRegisterEventBody>]: never; }) | undefined;
            storageRentEventBody?: ({
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } & {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } & { [K_10 in Exclude<keyof I_1["events"][number]["storageRentEventBody"], keyof StorageRentEventBody>]: never; }) | undefined;
            txIndex?: number;
            version?: number;
        } & { [K_11 in Exclude<keyof I_1["events"][number], keyof OnChainEvent>]: never; })[] & { [K_12 in Exclude<keyof I_1["events"], keyof {
            type?: OnChainEventType;
            chainId?: number;
            blockNumber?: number;
            blockHash?: Uint8Array;
            blockTimestamp?: number;
            transactionHash?: Uint8Array;
            logIndex?: number;
            qid?: number;
            signerEventBody?: {
                key?: Uint8Array;
                keyType?: number;
                eventType?: SignerEventType;
                metadata?: Uint8Array;
                metadataType?: number;
            } | undefined;
            signerMigratedEventBody?: {
                migratedAt?: number;
            } | undefined;
            idRegisterEventBody?: {
                to?: Uint8Array;
                eventType?: IdRegisterEventType;
                from?: Uint8Array;
                recoveryAddress?: Uint8Array;
            } | undefined;
            storageRentEventBody?: {
                payer?: Uint8Array;
                units?: number;
                expiry?: number;
            } | undefined;
            txIndex?: number;
            version?: number;
        }[]>]: never; };
        nextPageToken?: Uint8Array | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof OnChainEventResponse>]: never; }>(object: I_1): OnChainEventResponse;
};
interface StorageLimitsResponse {
    limits: StorageLimit[];
}
declare const StorageLimitsResponse: {
    encode(message: StorageLimitsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageLimitsResponse;
    fromJSON(object: any): StorageLimitsResponse;
    toJSON(message: StorageLimitsResponse): unknown;
    create<I extends {
        limits?: {
            storeType?: StoreType;
            limit?: number;
        }[];
    } & {
        limits?: {
            storeType?: StoreType;
            limit?: number;
        }[] & ({
            storeType?: StoreType;
            limit?: number;
        } & {
            storeType?: StoreType;
            limit?: number;
        } & { [K in Exclude<keyof I["limits"][number], keyof StorageLimit>]: never; })[] & { [K_1 in Exclude<keyof I["limits"], keyof {
            storeType?: StoreType;
            limit?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "limits">]: never; }>(base?: I | undefined): StorageLimitsResponse;
    fromPartial<I_1 extends {
        limits?: {
            storeType?: StoreType;
            limit?: number;
        }[];
    } & {
        limits?: {
            storeType?: StoreType;
            limit?: number;
        }[] & ({
            storeType?: StoreType;
            limit?: number;
        } & {
            storeType?: StoreType;
            limit?: number;
        } & { [K_3 in Exclude<keyof I_1["limits"][number], keyof StorageLimit>]: never; })[] & { [K_4 in Exclude<keyof I_1["limits"], keyof {
            storeType?: StoreType;
            limit?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "limits">]: never; }>(object: I_1): StorageLimitsResponse;
};
interface StorageLimit {
    storeType: StoreType;
    limit: number;
}
declare const StorageLimit: {
    encode(message: StorageLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StorageLimit;
    fromJSON(object: any): StorageLimit;
    toJSON(message: StorageLimit): unknown;
    create<I extends {
        storeType?: StoreType;
        limit?: number;
    } & {
        storeType?: StoreType;
        limit?: number;
    } & { [K in Exclude<keyof I, keyof StorageLimit>]: never; }>(base?: I | undefined): StorageLimit;
    fromPartial<I_1 extends {
        storeType?: StoreType;
        limit?: number;
    } & {
        storeType?: StoreType;
        limit?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof StorageLimit>]: never; }>(object: I_1): StorageLimit;
};
interface UsernameProofRequest {
    name: Uint8Array;
}
declare const UsernameProofRequest: {
    encode(message: UsernameProofRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UsernameProofRequest;
    fromJSON(object: any): UsernameProofRequest;
    toJSON(message: UsernameProofRequest): unknown;
    create<I extends {
        name?: Uint8Array;
    } & {
        name?: Uint8Array;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I | undefined): UsernameProofRequest;
    fromPartial<I_1 extends {
        name?: Uint8Array;
    } & {
        name?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): UsernameProofRequest;
};
interface UsernameProofsResponse {
    proofs: UserNameProof[];
}
declare const UsernameProofsResponse: {
    encode(message: UsernameProofsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UsernameProofsResponse;
    fromJSON(object: any): UsernameProofsResponse;
    toJSON(message: UsernameProofsResponse): unknown;
    create<I extends {
        proofs?: {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        }[];
    } & {
        proofs?: {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        }[] & ({
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & { [K in Exclude<keyof I["proofs"][number], keyof UserNameProof>]: never; })[] & { [K_1 in Exclude<keyof I["proofs"], keyof {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "proofs">]: never; }>(base?: I | undefined): UsernameProofsResponse;
    fromPartial<I_1 extends {
        proofs?: {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        }[];
    } & {
        proofs?: {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        }[] & ({
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        } & { [K_3 in Exclude<keyof I_1["proofs"][number], keyof UserNameProof>]: never; })[] & { [K_4 in Exclude<keyof I_1["proofs"], keyof {
            timestamp?: number;
            name?: Uint8Array;
            owner?: Uint8Array;
            signature?: Uint8Array;
            qid?: number;
            type?: UserNameType;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "proofs">]: never; }>(object: I_1): UsernameProofsResponse;
};
interface VerificationRequest {
    qid: number;
    address: Uint8Array;
}
declare const VerificationRequest: {
    encode(message: VerificationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationRequest;
    fromJSON(object: any): VerificationRequest;
    toJSON(message: VerificationRequest): unknown;
    create<I extends {
        qid?: number;
        address?: Uint8Array;
    } & {
        qid?: number;
        address?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof VerificationRequest>]: never; }>(base?: I | undefined): VerificationRequest;
    fromPartial<I_1 extends {
        qid?: number;
        address?: Uint8Array;
    } & {
        qid?: number;
        address?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, keyof VerificationRequest>]: never; }>(object: I_1): VerificationRequest;
};
interface SignerRequest {
    qid: number;
    signer: Uint8Array;
}
declare const SignerRequest: {
    encode(message: SignerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignerRequest;
    fromJSON(object: any): SignerRequest;
    toJSON(message: SignerRequest): unknown;
    create<I extends {
        qid?: number;
        signer?: Uint8Array;
    } & {
        qid?: number;
        signer?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof SignerRequest>]: never; }>(base?: I | undefined): SignerRequest;
    fromPartial<I_1 extends {
        qid?: number;
        signer?: Uint8Array;
    } & {
        qid?: number;
        signer?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, keyof SignerRequest>]: never; }>(object: I_1): SignerRequest;
};
interface LinkRequest {
    qid: number;
    linkType: string;
    targetQid?: number | undefined;
}
declare const LinkRequest: {
    encode(message: LinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkRequest;
    fromJSON(object: any): LinkRequest;
    toJSON(message: LinkRequest): unknown;
    create<I extends {
        qid?: number;
        linkType?: string;
        targetQid?: number | undefined;
    } & {
        qid?: number;
        linkType?: string;
        targetQid?: number | undefined;
    } & { [K in Exclude<keyof I, keyof LinkRequest>]: never; }>(base?: I | undefined): LinkRequest;
    fromPartial<I_1 extends {
        qid?: number;
        linkType?: string;
        targetQid?: number | undefined;
    } & {
        qid?: number;
        linkType?: string;
        targetQid?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LinkRequest>]: never; }>(object: I_1): LinkRequest;
};
interface LinksByQidRequest {
    qid: number;
    linkType?: string | undefined;
    pageSize?: number | undefined;
    pageToken?: Uint8Array | undefined;
    reverse?: boolean | undefined;
}
declare const LinksByQidRequest: {
    encode(message: LinksByQidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinksByQidRequest;
    fromJSON(object: any): LinksByQidRequest;
    toJSON(message: LinksByQidRequest): unknown;
    create<I extends {
        qid?: number;
        linkType?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        qid?: number;
        linkType?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof LinksByQidRequest>]: never; }>(base?: I | undefined): LinksByQidRequest;
    fromPartial<I_1 extends {
        qid?: number;
        linkType?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        qid?: number;
        linkType?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LinksByQidRequest>]: never; }>(object: I_1): LinksByQidRequest;
};
interface LinksByTargetRequest {
    targetQid?: number | undefined;
    linkType?: string | undefined;
    pageSize?: number | undefined;
    pageToken?: Uint8Array | undefined;
    reverse?: boolean | undefined;
}
declare const LinksByTargetRequest: {
    encode(message: LinksByTargetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinksByTargetRequest;
    fromJSON(object: any): LinksByTargetRequest;
    toJSON(message: LinksByTargetRequest): unknown;
    create<I extends {
        targetQid?: number | undefined;
        linkType?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        targetQid?: number | undefined;
        linkType?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof LinksByTargetRequest>]: never; }>(base?: I | undefined): LinksByTargetRequest;
    fromPartial<I_1 extends {
        targetQid?: number | undefined;
        linkType?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & {
        targetQid?: number | undefined;
        linkType?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: Uint8Array | undefined;
        reverse?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LinksByTargetRequest>]: never; }>(object: I_1): LinksByTargetRequest;
};
interface IdRegistryEventByAddressRequest {
    address: Uint8Array;
}
declare const IdRegistryEventByAddressRequest: {
    encode(message: IdRegistryEventByAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdRegistryEventByAddressRequest;
    fromJSON(object: any): IdRegistryEventByAddressRequest;
    toJSON(message: IdRegistryEventByAddressRequest): unknown;
    create<I extends {
        address?: Uint8Array;
    } & {
        address?: Uint8Array;
    } & { [K in Exclude<keyof I, "address">]: never; }>(base?: I | undefined): IdRegistryEventByAddressRequest;
    fromPartial<I_1 extends {
        address?: Uint8Array;
    } & {
        address?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never; }>(object: I_1): IdRegistryEventByAddressRequest;
};

/** Message types */
type CastAddData = MessageData & {
    type: MessageType.CAST_ADD;
    castAddBody: CastAddBody;
};
type CastAddMessage = Message & {
    data: CastAddData;
    signatureScheme: SignatureScheme.ED25519;
};
type CastRemoveData = MessageData & {
    type: MessageType.CAST_REMOVE;
    castRemoveBody: CastRemoveBody;
};
type CastRemoveMessage = Message & {
    data: CastRemoveData;
    signatureScheme: SignatureScheme.ED25519;
};
type LinkAddData = MessageData & {
    type: MessageType.LINK_ADD;
    linkBody: LinkBody;
};
type LinkAddMessage = Message & {
    data: LinkAddData;
    signatureScheme: SignatureScheme.ED25519;
};
type LinkRemoveData = MessageData & {
    type: MessageType.LINK_REMOVE;
    linkBody: LinkBody;
};
type LinkRemoveMessage = Message & {
    data: LinkRemoveData;
    signatureScheme: SignatureScheme.ED25519;
};
type ReactionAddData = MessageData & {
    type: MessageType.REACTION_ADD;
    reactionBody: ReactionBody;
};
type ReactionAddMessage = Message & {
    data: ReactionAddData;
    signatureScheme: SignatureScheme.ED25519;
};
type ReactionRemoveData = MessageData & {
    type: MessageType.REACTION_REMOVE;
    reactionBody: ReactionBody;
};
type ReactionRemoveMessage = Message & {
    data: ReactionRemoveData;
    signatureScheme: SignatureScheme.ED25519;
};
type VerificationAddEthAddressData = MessageData & {
    type: MessageType.VERIFICATION_ADD_ETH_ADDRESS;
    verificationAddEthAddressBody: VerificationAddEthAddressBody;
};
type VerificationAddEthAddressMessage = Message & {
    data: VerificationAddEthAddressData;
    signatureScheme: SignatureScheme.ED25519;
};
type VerificationRemoveData = MessageData & {
    type: MessageType.VERIFICATION_REMOVE;
    verificationRemoveBody: VerificationRemoveBody;
};
type VerificationRemoveMessage = Message & {
    data: VerificationRemoveData;
    signatureScheme: SignatureScheme.ED25519;
};
type UserDataAddData = MessageData & {
    type: MessageType.USER_DATA_ADD;
    userDataBody: UserDataBody;
};
type UserDataAddMessage = Message & {
    data: UserDataAddData;
    signatureScheme: SignatureScheme.ED25519;
};
type UsernameProofData = MessageData & {
    type: MessageType.USERNAME_PROOF;
    usernameProofBody: UserNameProof;
};
type UsernameProofMessage = Message & {
    data: UsernameProofData;
    signatureScheme: SignatureScheme.ED25519;
};
type SignerOnChainEvent = OnChainEvent & {
    type: OnChainEventType.EVENT_TYPE_SIGNER;
    signerEventBody: SignerEventBody;
};
type SignerMigratedOnChainEvent = OnChainEvent & {
    type: OnChainEventType.EVENT_TYPE_SIGNER_MIGRATED;
    signerMigratedEventBody: SignerMigratedEventBody;
};
type IdRegisterOnChainEvent = OnChainEvent & {
    type: OnChainEventType.EVENT_TYPE_ID_REGISTER;
    idRegisterEventBody: IdRegisterEventBody;
};
type StorageRentOnChainEvent = OnChainEvent & {
    type: OnChainEventType.EVENT_TYPE_STORAGE_RENT;
    storageRentEventBody: StorageRentEventBody;
};
/** Hub event types */
type MergeMessageHubEvent = HubEvent & {
    type: HubEventType.MERGE_MESSAGE;
    mergeMessageBody: MergeMessageBody & {
        message: Message;
    };
};
type RevokeMessageHubEvent = HubEvent & {
    type: HubEventType.REVOKE_MESSAGE;
    revokeMessageBody: RevokeMessageBody & {
        message: Message;
    };
};
type PruneMessageHubEvent = HubEvent & {
    type: HubEventType.PRUNE_MESSAGE;
    pruneMessageBody: PruneMessageBody & {
        message: Message;
    };
};
type MergeOnChainEventHubEvent = HubEvent & {
    type: HubEventType.MERGE_ON_CHAIN_EVENT;
    mergeOnChainEventBody: MergeOnChainEventBody & {
        onChainEvent: OnChainEvent;
    };
};
type MergeUsernameProofHubEvent = HubEvent & {
    type: HubEventType.MERGE_USERNAME_PROOF;
    mergeUsernameProofBody: MergeUserNameProofBody;
};

/** Message typeguards */
declare const isCastAddData: (data: MessageData) => data is CastAddData;
declare const isCastAddMessage: (message: Message) => message is CastAddMessage;
declare const isCastRemoveData: (data: MessageData) => data is CastRemoveData;
declare const isCastRemoveMessage: (message: Message) => message is CastRemoveMessage;
declare const isLinkAddData: (data: MessageData) => data is LinkAddData;
declare const isLinkAddMessage: (message: Message) => message is LinkAddMessage;
declare const isLinkRemoveData: (data: MessageData) => data is LinkRemoveData;
declare const isLinkRemoveMessage: (message: Message) => message is LinkRemoveMessage;
declare const isReactionAddData: (data: MessageData) => data is ReactionAddData;
declare const isReactionAddMessage: (message: Message) => message is ReactionAddMessage;
declare const isReactionRemoveData: (data: MessageData) => data is ReactionRemoveData;
declare const isReactionRemoveMessage: (message: Message) => message is ReactionRemoveMessage;
declare const isVerificationAddEthAddressData: (data: MessageData) => data is VerificationAddEthAddressData;
declare const isVerificationAddEthAddressMessage: (message: Message) => message is VerificationAddEthAddressMessage;
declare const isVerificationRemoveData: (data: MessageData) => data is VerificationRemoveData;
declare const isVerificationRemoveMessage: (message: Message) => message is VerificationRemoveMessage;
declare const isUserDataAddData: (data: MessageData) => data is UserDataAddData;
declare const isUserDataAddMessage: (message: Message) => message is UserDataAddMessage;
declare const isUsernameProofData: (data: MessageData) => data is UsernameProofData;
declare const isUsernameProofMessage: (message: Message) => message is UsernameProofMessage;
declare const isSignerOnChainEvent: (event: OnChainEvent) => event is SignerOnChainEvent;
declare const isSignerMigratedOnChainEvent: (event: OnChainEvent) => event is SignerMigratedOnChainEvent;
declare const isIdRegisterOnChainEvent: (event: OnChainEvent) => event is IdRegisterOnChainEvent;
declare const isStorageRentOnChainEvent: (event: OnChainEvent) => event is StorageRentOnChainEvent;
/** Hub event typeguards */
declare const isMergeMessageHubEvent: (event: HubEvent) => event is MergeMessageHubEvent;
declare const isRevokeMessageHubEvent: (event: HubEvent) => event is RevokeMessageHubEvent;
declare const isPruneMessageHubEvent: (event: HubEvent) => event is PruneMessageHubEvent;
declare const isMergeOnChainHubEvent: (event: HubEvent) => event is MergeOnChainEventHubEvent;
declare const isMergeUsernameProofHubEvent: (event: HubEvent) => event is MergeUsernameProofHubEvent;

interface HubErrorOpts {
    message: string;
    cause: Error | HubError;
    presentable: boolean;
}
declare const isHubError: (e: any) => e is HubError;
/**
 * HubError should be used to construct all types exceptions in the Hub.
 *
 * A HubError is instantiated with a HubErrorCode that classifies the error, a context object that
 * provides additional information about the error. The context object can be a string, an Error,
 * or both and also accepts additional parameters to classify the HubError. HubErrors should never
 * be thrown directly and always be returned using neverthrow's Result type.
 */
declare class HubError extends Error {
    readonly errCode: HubErrorCode;
    readonly presentable: boolean;
    /**
     * @param errCode - the HubError code for this message
     * @param context - a message, another Error, or a HubErrorOpts
     */
    constructor(errCode: HubErrorCode, context: Partial<HubErrorOpts> | string | Error);
}
/**
 * HubErrorCode defines all the types of errors that can be raised in the Hub.
 *
 * A string union type is chosen over an enumeration since TS enums are unusual types that generate
 * javascript code and may cause downstream issues. See:
 * https://www.executeprogram.com/blog/typescript-features-to-avoid
 */
type HubErrorCode = "unauthenticated" | "unauthorized" | "bad_request" | "bad_request.parse_failure" | "bad_request.invalid_param" | "bad_request.validation_failure" | "bad_request.duplicate" | "bad_request.conflict" | "bad_request.prunable" | "not_found" | "not_implemented" | "not_implemented.deprecated" | "unavailable" | "unavailable.network_failure" | "unavailable.storage_failure" | "unknown";
/** Type alias for shorthand when handling errors */
type HubResult<T> = Result<T, HubError>;
type HubAsyncResult<T> = Promise<HubResult<T>>;

interface Signer {
    readonly scheme: SignatureScheme;
    /**
     * Get the key in bytes used to idenitfy this signer.
     */
    getSignerKey(): HubAsyncResult<Uint8Array>;
    /**
     * Generates a 256-bit signature for a message hash and returns the bytes.
     */
    signMessageHash(hash: Uint8Array): HubAsyncResult<Uint8Array>;
}

/**
 * Extend this class to implement an Ed25519 signer.
 */
declare abstract class Ed25519Signer implements Signer {
    /** Signature scheme as defined in protobufs */
    readonly scheme = SignatureScheme.ED25519;
    /**
     * Get the 256-bit public key in bytes
     */
    abstract getSignerKey(): HubAsyncResult<Uint8Array>;
    abstract signMessageHash(hash: Uint8Array): HubAsyncResult<Uint8Array>;
}

type VerificationEthAddressClaim = {
    qid: bigint;
    address: `0x${string}`;
    network: OpenrealmNetwork;
    blockHash: `0x${string}`;
};
declare const makeVerificationEthAddressClaim: (qid: number, ethAddress: Uint8Array, network: OpenrealmNetwork, blockHash: Uint8Array) => HubResult<VerificationEthAddressClaim>;

type UserNameProofClaim = {
    /** Username being claimed **/
    name: string;
    /** Custody address claiming the username **/
    owner: `0x${string}`;
    /** Unix timestamp of proof in bigint representation **/
    timestamp: bigint;
};
declare const makeUserNameProofClaim: ({ name, owner, timestamp, }: {
    /** Username being claimed **/
    name: string;
    /** Custody address claiming the username **/
    owner: `0x${string}`;
    /** Unix timestamp of proof **/
    timestamp: number;
}) => UserNameProofClaim;

/**
 * Extend this class to implement an EIP712 signer.
 */
declare abstract class Eip712Signer implements Signer {
    /** Signature scheme as defined in protobufs */
    readonly scheme = SignatureScheme.EIP712;
    /**
     * Get the 160-bit address in bytes.
     */
    abstract getSignerKey(): HubAsyncResult<Uint8Array>;
    abstract signMessageHash(hash: Uint8Array): HubAsyncResult<Uint8Array>;
    abstract signVerificationEthAddressClaim(claim: VerificationEthAddressClaim, chainId?: number): HubAsyncResult<Uint8Array>;
    abstract signUserNameProofClaim(claim: UserNameProofClaim): HubAsyncResult<Uint8Array>;
}

type MinimalEthersSigner = Pick<Signer$1, "signTypedData" | "getAddress">;
declare class EthersEip712Signer extends Eip712Signer {
    private readonly _ethersSigner;
    constructor(signer: MinimalEthersSigner);
    getSignerKey(): HubAsyncResult<Uint8Array>;
    signMessageHash(hash: Uint8Array): HubAsyncResult<Uint8Array>;
    signVerificationEthAddressClaim(claim: VerificationEthAddressClaim, chainId?: number): HubAsyncResult<Uint8Array>;
    signUserNameProofClaim(userNameProof: UserNameProofClaim): HubAsyncResult<Uint8Array>;
}

type TypedDataSigner = Signer$2 & TypedDataSigner$1;
declare class EthersV5Eip712Signer extends Eip712Signer {
    private readonly _typedDataSigner;
    constructor(typedDataSigner: TypedDataSigner);
    getSignerKey(): HubAsyncResult<Uint8Array>;
    signMessageHash(hash: Uint8Array): HubAsyncResult<Uint8Array>;
    signVerificationEthAddressClaim(claim: VerificationEthAddressClaim, chainId?: number): HubAsyncResult<Uint8Array>;
    signUserNameProofClaim(usernameProof: UserNameProofClaim): HubAsyncResult<Uint8Array>;
}

declare class NobleEd25519Signer extends Ed25519Signer {
    private readonly _privateKey;
    constructor(privateKey: Uint8Array);
    getSignerKey(): HubAsyncResult<Uint8Array>;
    signMessageHash(hash: Uint8Array): HubAsyncResult<Uint8Array>;
}

declare class ViemLocalEip712Signer extends Eip712Signer {
    private readonly _viemLocalAccount;
    constructor(viemLocalAccount: LocalAccount<string>);
    getSignerKey(): HubAsyncResult<Uint8Array>;
    signMessageHash(hash: Uint8Array): HubAsyncResult<Uint8Array>;
    signVerificationEthAddressClaim(claim: VerificationEthAddressClaim, chainId?: number): HubAsyncResult<Uint8Array>;
    signUserNameProofClaim(userNameProof: UserNameProofClaim): HubAsyncResult<Uint8Array>;
}

interface ViemPublicClient {
    verifyTypedData: (args: VerifyTypedDataParameters) => Promise<boolean>;
}
type PublicClients = {
    [chainId: number]: ViemPublicClient;
};
declare const defaultL1PublicClient: ViemPublicClient;
declare const defaultL2PublicClient: ViemPublicClient;
declare const defaultL1PublicTestClient: ViemPublicClient;
declare const defaultL2PublicTestClient: ViemPublicClient;
declare const defaultPublicClients: PublicClients;

type clients_PublicClients = PublicClients;
type clients_ViemPublicClient = ViemPublicClient;
declare const clients_defaultL1PublicClient: typeof defaultL1PublicClient;
declare const clients_defaultL1PublicTestClient: typeof defaultL1PublicTestClient;
declare const clients_defaultL2PublicClient: typeof defaultL2PublicClient;
declare const clients_defaultL2PublicTestClient: typeof defaultL2PublicTestClient;
declare const clients_defaultPublicClients: typeof defaultPublicClients;
declare namespace clients {
  export {
    clients_PublicClients as PublicClients,
    clients_ViemPublicClient as ViemPublicClient,
    clients_defaultL1PublicClient as defaultL1PublicClient,
    clients_defaultL1PublicTestClient as defaultL1PublicTestClient,
    clients_defaultL2PublicClient as defaultL2PublicClient,
    clients_defaultL2PublicTestClient as defaultL2PublicTestClient,
    clients_defaultPublicClients as defaultPublicClients,
  };
}

/** Internal Types  */
type MessageDataOptions = Pick<MessageData, "qid" | "network"> & {
    timestamp?: number;
};
type MessageSignerOptions = Pick<Message, "signature" | "signatureScheme" | "signer">;
declare const makeMessageHash: (messageData: MessageData) => HubAsyncResult<Uint8Array>;
declare const makeMessageWithSignature: (messageData: MessageData, signerOptions: MessageSignerOptions) => HubAsyncResult<Message>;
declare const makeCastAdd: (body: CastAddBody, dataOptions: MessageDataOptions, signer: Signer) => HubAsyncResult<CastAddMessage>;
declare const makeCastRemove: (body: CastRemoveBody, dataOptions: MessageDataOptions, signer: Signer) => HubAsyncResult<CastRemoveMessage>;
declare const makeCastAddData: (body: CastAddBody, dataOptions: MessageDataOptions) => HubAsyncResult<CastAddData>;
declare const makeCastRemoveData: (body: CastRemoveBody, dataOptions: MessageDataOptions) => HubAsyncResult<CastRemoveData>;
declare const makeLinkAdd: (body: LinkBody, dataOptions: MessageDataOptions, signer: Signer) => HubAsyncResult<LinkAddMessage>;
declare const makeLinkRemove: (body: LinkBody, dataOptions: MessageDataOptions, signer: Signer) => HubAsyncResult<LinkRemoveMessage>;
declare const makeLinkAddData: (body: LinkBody, dataOptions: MessageDataOptions) => HubAsyncResult<LinkAddData>;
declare const makeLinkRemoveData: (body: LinkBody, dataOptions: MessageDataOptions) => HubAsyncResult<LinkRemoveData>;
declare const makeReactionAdd: (body: ReactionBody, dataOptions: MessageDataOptions, signer: Signer) => HubAsyncResult<ReactionAddMessage>;
declare const makeReactionRemove: (body: ReactionBody, dataOptions: MessageDataOptions, signer: Signer) => HubAsyncResult<ReactionRemoveMessage>;
declare const makeReactionAddData: (body: ReactionBody, dataOptions: MessageDataOptions) => HubAsyncResult<ReactionAddData>;
declare const makeReactionRemoveData: (body: ReactionBody, dataOptions: MessageDataOptions) => HubAsyncResult<ReactionRemoveData>;
declare const makeVerificationAddEthAddress: (body: VerificationAddEthAddressBody, dataOptions: MessageDataOptions, signer: Signer, publicClients?: PublicClients) => HubAsyncResult<VerificationAddEthAddressMessage>;
declare const makeVerificationRemove: (body: VerificationRemoveBody, dataOptions: MessageDataOptions, signer: Signer) => HubAsyncResult<VerificationRemoveMessage>;
declare const makeVerificationAddEthAddressData: (body: VerificationAddEthAddressBody, dataOptions: MessageDataOptions, publicClients?: PublicClients) => HubAsyncResult<VerificationAddEthAddressData>;
declare const makeVerificationRemoveData: (body: VerificationRemoveBody, dataOptions: MessageDataOptions) => HubAsyncResult<VerificationRemoveData>;
declare const makeUserDataAdd: (body: UserDataBody, dataOptions: MessageDataOptions, signer: Signer) => HubAsyncResult<UserDataAddMessage>;
declare const makeUserDataAddData: (body: UserDataBody, dataOptions: MessageDataOptions) => HubAsyncResult<UserDataAddData>;
declare const makeUsernameProof: (body: UserNameProof, dataOptions: MessageDataOptions, signer: Signer) => HubAsyncResult<UsernameProofMessage>;
declare const makeUsernameProofData: (body: UserNameProof, dataOptions: MessageDataOptions) => HubAsyncResult<UsernameProofData>;

declare const bytesCompare: (a: Uint8Array, b: Uint8Array) => number;
declare const bytesIncrement: (inputBytes: Uint8Array) => HubResult<Uint8Array>;
declare const bytesDecrement: (inputBytes: Uint8Array) => HubResult<Uint8Array>;
declare const bytesToHexString: (bytes: Uint8Array) => HubResult<`0x${string}`>;
declare const hexStringToBytes: (hex: string) => HubResult<Uint8Array>;
declare const bytesToUtf8String: (bytes: Uint8Array) => HubResult<string>;
declare const utf8StringToBytes: (utf8: string) => HubResult<Uint8Array>;
declare const bigIntToBytes: (value: bigint) => HubResult<Uint8Array>;
declare const bytesToBigInt: (bytes: Uint8Array) => HubResult<bigint>;
declare const bytesStartsWith: (haystack: Uint8Array, needle: Uint8Array) => boolean;

declare const getPublicKey: (privateKey: Uint8Array) => HubAsyncResult<Uint8Array>;
declare const signMessageHash$1: (hash: Uint8Array, privateKey: Uint8Array) => HubAsyncResult<Uint8Array>;
declare const verifyMessageHashSignature$1: (signature: Uint8Array, hash: Uint8Array, publicKey: Uint8Array) => HubAsyncResult<boolean>;

declare const ed25519_getPublicKey: typeof getPublicKey;
declare namespace ed25519 {
  export {
    ed25519_getPublicKey as getPublicKey,
    signMessageHash$1 as signMessageHash,
    verifyMessageHashSignature$1 as verifyMessageHashSignature,
  };
}

declare const EIP_712_OPENREALM_DOMAIN: {
    readonly name: "Openrealm Verify Ethereum Address";
    readonly version: "2.0.0";
    readonly salt: "0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558";
};
declare const EIP_712_OPENREALM_VERIFICATION_CLAIM: readonly [{
    readonly name: "qid";
    readonly type: "uint256";
}, {
    readonly name: "address";
    readonly type: "address";
}, {
    readonly name: "blockHash";
    readonly type: "bytes32";
}, {
    readonly name: "network";
    readonly type: "uint8";
}];
declare const EIP_712_OPENREALM_VERIFICATION_CLAIM_CHAIN_IDS: number[];
declare const EIP_712_OPENREALM_MESSAGE_DATA: readonly [{
    readonly name: "hash";
    readonly type: "bytes";
}];
declare const EIP_712_USERNAME_DOMAIN: {
    readonly name: "Openrealm name verification";
    readonly version: "1";
    readonly chainId: 1;
    readonly verifyingContract: "0xe3be01d99baa8db9905b33a3ca391238234b79d1";
};
declare const EIP_712_USERNAME_PROOF: readonly [{
    readonly name: "name";
    readonly type: "string";
}, {
    readonly name: "timestamp";
    readonly type: "uint256";
}, {
    readonly name: "owner";
    readonly type: "address";
}];
declare const verifyVerificationClaimEOASignature: (claim: VerificationEthAddressClaim, signature: Uint8Array, address: Uint8Array, chainId: number) => HubAsyncResult<boolean>;
declare const verifyVerificationClaimContractSignature: (claim: VerificationEthAddressClaim, signature: Uint8Array, address: Uint8Array, chainId: number, publicClients?: PublicClients) => HubAsyncResult<boolean>;
declare const verifyVerificationEthAddressClaimSignature: (claim: VerificationEthAddressClaim, signature: Uint8Array, address: Uint8Array, verificationType?: number, chainId?: number, publicClients?: PublicClients) => HubAsyncResult<boolean>;
declare const verifyUserNameProofClaim: (nameProof: UserNameProofClaim, signature: Uint8Array, address: Uint8Array) => HubAsyncResult<boolean>;
declare const verifyMessageHashSignature: (hash: Uint8Array, signature: Uint8Array, address: Uint8Array) => HubAsyncResult<boolean>;

declare const eip712_EIP_712_OPENREALM_DOMAIN: typeof EIP_712_OPENREALM_DOMAIN;
declare const eip712_EIP_712_OPENREALM_MESSAGE_DATA: typeof EIP_712_OPENREALM_MESSAGE_DATA;
declare const eip712_EIP_712_OPENREALM_VERIFICATION_CLAIM: typeof EIP_712_OPENREALM_VERIFICATION_CLAIM;
declare const eip712_EIP_712_OPENREALM_VERIFICATION_CLAIM_CHAIN_IDS: typeof EIP_712_OPENREALM_VERIFICATION_CLAIM_CHAIN_IDS;
declare const eip712_EIP_712_USERNAME_DOMAIN: typeof EIP_712_USERNAME_DOMAIN;
declare const eip712_EIP_712_USERNAME_PROOF: typeof EIP_712_USERNAME_PROOF;
declare const eip712_verifyMessageHashSignature: typeof verifyMessageHashSignature;
declare const eip712_verifyUserNameProofClaim: typeof verifyUserNameProofClaim;
declare const eip712_verifyVerificationClaimContractSignature: typeof verifyVerificationClaimContractSignature;
declare const eip712_verifyVerificationClaimEOASignature: typeof verifyVerificationClaimEOASignature;
declare const eip712_verifyVerificationEthAddressClaimSignature: typeof verifyVerificationEthAddressClaimSignature;
declare namespace eip712 {
  export {
    eip712_EIP_712_OPENREALM_DOMAIN as EIP_712_OPENREALM_DOMAIN,
    eip712_EIP_712_OPENREALM_MESSAGE_DATA as EIP_712_OPENREALM_MESSAGE_DATA,
    eip712_EIP_712_OPENREALM_VERIFICATION_CLAIM as EIP_712_OPENREALM_VERIFICATION_CLAIM,
    eip712_EIP_712_OPENREALM_VERIFICATION_CLAIM_CHAIN_IDS as EIP_712_OPENREALM_VERIFICATION_CLAIM_CHAIN_IDS,
    eip712_EIP_712_USERNAME_DOMAIN as EIP_712_USERNAME_DOMAIN,
    eip712_EIP_712_USERNAME_PROOF as EIP_712_USERNAME_PROOF,
    eip712_verifyMessageHashSignature as verifyMessageHashSignature,
    eip712_verifyUserNameProofClaim as verifyUserNameProofClaim,
    eip712_verifyVerificationClaimContractSignature as verifyVerificationClaimContractSignature,
    eip712_verifyVerificationClaimEOASignature as verifyVerificationClaimEOASignature,
    eip712_verifyVerificationEthAddressClaimSignature as verifyVerificationEthAddressClaimSignature,
  };
}

declare const CHAIN_IDS: readonly [1, 5, 10, 420];

declare const chains_CHAIN_IDS: typeof CHAIN_IDS;
declare namespace chains {
  export {
    chains_CHAIN_IDS as CHAIN_IDS,
  };
}

declare const Factories: {
    Qid: Factory<number, any, number>;
    Qname: Factory<Uint8Array, any, Uint8Array>;
    Bytes: Factory<Uint8Array, {
        length?: number;
    }, Uint8Array>;
    MessageHash: Factory<Uint8Array, any, Uint8Array>;
    BlockHash: Factory<Uint8Array, any, Uint8Array>;
    EthAddress: Factory<Uint8Array, any, Uint8Array>;
    EnsName: Factory<Uint8Array, any, Uint8Array>;
    TransactionHash: Factory<Uint8Array, any, Uint8Array>;
    Ed25519PrivateKey: Factory<Uint8Array, any, Uint8Array>;
    Ed25519PPublicKey: Factory<Uint8Array, any, Uint8Array>;
    Ed25519Signer: Factory<Ed25519Signer, any, Ed25519Signer>;
    Ed25519Signature: Factory<Uint8Array, any, Uint8Array>;
    Eip712Signer: Factory<Eip712Signer, {
        account: LocalAccount$1;
    }, Eip712Signer>;
    Eip712Signature: Factory<Uint8Array, any, Uint8Array>;
    CastId: Factory<CastId, any, CastId>;
    OpenrealmNetwork: Factory<OpenrealmNetwork, any, OpenrealmNetwork>;
    ReactionType: Factory<ReactionType, any, ReactionType>;
    MessageType: Factory<MessageType, any, MessageType>;
    MessageData: Factory<MessageData, any, MessageData>;
    Message: Factory<Message, {
        signer?: Ed25519Signer | Eip712Signer;
    }, Message>;
    CastIdEmbed: Factory<Embed, any, Embed>;
    UrlEmbed: Factory<Embed, any, Embed>;
    Embed: Factory<Embed, any, Embed>;
    CastAddBody: Factory<CastAddBody, any, CastAddBody>;
    CastAddData: Factory<CastAddData, any, CastAddData>;
    CastAddMessage: Factory<CastAddMessage, {
        signer?: Ed25519Signer;
    }, CastAddMessage>;
    CastRemoveBody: Factory<CastRemoveBody, any, CastRemoveBody>;
    CastRemoveData: Factory<CastRemoveData, any, CastRemoveData>;
    CastRemoveMessage: Factory<CastRemoveMessage, {
        signer?: Ed25519Signer;
    }, CastRemoveMessage>;
    LinkBody: Factory<LinkBody, any, LinkBody>;
    LinkAddData: Factory<LinkAddData, any, LinkAddData>;
    LinkAddMessage: Factory<LinkAddMessage, {
        signer?: Ed25519Signer;
    }, LinkAddMessage>;
    LinkRemoveData: Factory<LinkRemoveData, any, LinkRemoveData>;
    LinkRemoveMessage: Factory<LinkRemoveMessage, {
        signer?: Ed25519Signer;
    }, LinkRemoveMessage>;
    ReactionBody: Factory<ReactionBody, any, ReactionBody>;
    ReactionAddData: Factory<ReactionAddData, any, ReactionAddData>;
    ReactionAddMessage: Factory<ReactionAddMessage, {
        signer?: Ed25519Signer;
    }, ReactionAddMessage>;
    ReactionRemoveData: Factory<ReactionRemoveData, any, ReactionRemoveData>;
    ReactionRemoveMessage: Factory<ReactionRemoveMessage, {
        signer?: Ed25519Signer;
    }, ReactionRemoveMessage>;
    VerificationEthAddressClaim: Factory<VerificationEthAddressClaim, any, VerificationEthAddressClaim>;
    VerificationAddEthAddressBody: Factory<VerificationAddEthAddressBody, {
        qid?: number;
        network?: OpenrealmNetwork;
        signer?: Eip712Signer | undefined;
        contractSignature?: boolean;
    }, VerificationAddEthAddressBody>;
    VerificationAddEthAddressData: Factory<VerificationAddEthAddressData, {
        signer?: Eip712Signer | undefined;
    }, VerificationAddEthAddressData>;
    VerificationAddEthAddressMessage: Factory<VerificationAddEthAddressMessage, {
        signer?: Ed25519Signer;
        ethSigner?: Eip712Signer;
    }, VerificationAddEthAddressMessage>;
    VerificationRemoveBody: Factory<VerificationRemoveBody, any, VerificationRemoveBody>;
    VerificationRemoveData: Factory<VerificationRemoveData, any, VerificationRemoveData>;
    VerificationRemoveMessage: Factory<VerificationRemoveMessage, {
        signer?: Ed25519Signer;
    }, VerificationRemoveMessage>;
    UserDataBody: Factory<UserDataBody, any, UserDataBody>;
    UserDataAddData: Factory<UserDataAddData, any, UserDataAddData>;
    UserDataAddMessage: Factory<UserDataAddMessage, {
        signer?: Ed25519Signer;
    }, UserDataAddMessage>;
    UserNameProof: Factory<UserNameProof, any, UserNameProof>;
    UsernameProofData: Factory<UsernameProofData, any, UsernameProofData>;
    UsernameProofMessage: Factory<UsernameProofMessage, {
        signer?: Ed25519Signer;
    }, UsernameProofMessage>;
    OnChainEvent: Factory<OnChainEvent, any, OnChainEvent>;
    SignerEventBody: Factory<SignerEventBody, any, SignerEventBody>;
    SignerOnChainEvent: Factory<SignerOnChainEvent, {
        signer?: Uint8Array;
    }, SignerOnChainEvent>;
    IdRegistryOnChainEvent: Factory<IdRegisterOnChainEvent, {
        to?: Uint8Array;
    }, IdRegisterOnChainEvent>;
    IdRegistryEventBody: Factory<IdRegisterEventBody, any, IdRegisterEventBody>;
    SignerMigratedOnChainEvent: Factory<SignerMigratedOnChainEvent, any, SignerMigratedOnChainEvent>;
    StorageRentEventBody: Factory<StorageRentEventBody, any, StorageRentEventBody>;
    StorageRentOnChainEvent: Factory<StorageRentOnChainEvent, {
        units?: number;
    }, StorageRentOnChainEvent>;
};

declare const OPENREALM_EPOCH = 1609459200000;
/**
 * Get the current Openrealm time.
 * @returns seconds since the Openrealm Epoch
 */
declare const getOpenrealmTime: () => HubResult<number>;
/**
 * Converts from a Unix to Openrealm timestamp.
 * @param time unix milliseconds
 * @returns seconds since the Openrealm Epoch
 */
declare const toOpenrealmTime: (time: number) => HubResult<number>;
/**
 * Converts from a Openrealm to Unix timestamp.
 * @param time seconds since the Openrealm Epoch
 * @returns unix milliseconds
 */
declare const fromOpenrealmTime: (time: number) => HubResult<number>;
/** Extracts the timestamp from an event ID. */
declare const extractEventTimestamp: (eventId: number) => number;

/** Number of seconds (10 minutes) that is appropriate for clock skew */
declare const ALLOWED_CLOCK_SKEW_SECONDS: number;
declare const QNAME_REGEX: RegExp;
declare const HEX_REGEX: RegExp;
declare const USERNAME_MAX_LENGTH = 20;
declare const EMBEDS_V1_CUTOFF = 73612800;
/**
 * CPU intensive validation methods that are used during validations. By default, we use
 * pure JS implementations for compatibility, but we can also use native implementations if available.
 */
type ValidationMethods = {
    ed25519_verify: (signature: Uint8Array, message: Uint8Array, publicKey: Uint8Array) => Promise<boolean>;
    ed25519_signMessageHash: (hash: Uint8Array, signingKey: Uint8Array) => Promise<Uint8Array>;
    blake3_20: (message: Uint8Array) => Uint8Array;
};
declare const createMessageHash: (message?: Uint8Array, hashScheme?: HashScheme, validationMethods?: ValidationMethods) => HubAsyncResult<Uint8Array>;
declare const signMessageHash: (hash?: Uint8Array, signingKey?: Uint8Array, validationMethods?: ValidationMethods) => HubAsyncResult<Uint8Array>;
declare const verifySignedMessageHash: (hash?: Uint8Array, signature?: Uint8Array, signer?: Uint8Array, validationMethods?: ValidationMethods) => HubAsyncResult<boolean>;
declare const validateMessageHash: (hash?: Uint8Array) => HubResult<Uint8Array>;
declare const validateCastId: (castId?: CastId) => HubResult<CastId>;
declare const validateQid: (qid?: number | null) => HubResult<number>;
declare const validateEthAddress: (address?: Uint8Array | null) => HubResult<Uint8Array>;
declare const validateEthBlockHash: (blockHash?: Uint8Array | null) => HubResult<Uint8Array>;
declare const validateEd25519PublicKey: (publicKey?: Uint8Array | null) => HubResult<Uint8Array>;
declare const validateMessage: (message: Message, validationMethods?: ValidationMethods, publicClients?: PublicClients) => HubAsyncResult<Message>;
declare const validateMessageData: <T extends MessageData>(data: T, publicClients?: PublicClients) => HubAsyncResult<T>;
declare const validateVerificationAddEthAddressSignature: (body: VerificationAddEthAddressBody, qid: number, network: OpenrealmNetwork, publicClients?: PublicClients) => HubAsyncResult<Uint8Array>;
declare const validateUrl: (url: string) => HubResult<string>;
declare const validateParent: (parent: CastId | string) => HubResult<CastId | string>;
declare const validateEmbed: (embed: Embed) => HubResult<Embed>;
declare const validateCastAddBody: (body: CastAddBody, allowEmbedsDeprecated?: boolean) => HubResult<CastAddBody>;
declare const validateCastRemoveBody: (body: CastRemoveBody) => HubResult<CastRemoveBody>;
declare const validateLinkType: (type: string) => HubResult<string>;
declare const validateReactionType: (type: number) => HubResult<ReactionType>;
declare const validateTarget: (target: CastId | string | number) => HubResult<CastId | string | number>;
declare const validateMessageType: (type: number) => HubResult<MessageType>;
declare const validateNetwork: (network: number) => HubResult<OpenrealmNetwork>;
declare const validateLinkBody: (body: LinkBody) => HubResult<LinkBody>;
declare const validateReactionBody: (body: ReactionBody) => HubResult<ReactionBody>;
declare const validateVerificationAddEthAddressBody: (body: VerificationAddEthAddressBody, qid: number, network: OpenrealmNetwork, publicClients: PublicClients) => HubAsyncResult<VerificationAddEthAddressBody>;
declare const validateVerificationRemoveBody: (body: VerificationRemoveBody) => HubResult<VerificationRemoveBody>;
declare const validateUsernameProofBody: (body: UserNameProof, data: MessageData) => HubResult<UserNameProof>;
declare const validateUserDataType: (type: number) => HubResult<UserDataType>;
declare const validateUserDataAddBody: (body: UserDataBody) => HubResult<UserDataBody>;
declare const validateQname: <T extends string | Uint8Array>(qnameP?: T | null | undefined) => HubResult<T>;
declare const validateEnsName: <T extends string | Uint8Array>(ensNameP?: T | null | undefined) => HubResult<T>;

declare const validations_ALLOWED_CLOCK_SKEW_SECONDS: typeof ALLOWED_CLOCK_SKEW_SECONDS;
declare const validations_EMBEDS_V1_CUTOFF: typeof EMBEDS_V1_CUTOFF;
declare const validations_HEX_REGEX: typeof HEX_REGEX;
declare const validations_QNAME_REGEX: typeof QNAME_REGEX;
declare const validations_USERNAME_MAX_LENGTH: typeof USERNAME_MAX_LENGTH;
type validations_ValidationMethods = ValidationMethods;
declare const validations_createMessageHash: typeof createMessageHash;
declare const validations_signMessageHash: typeof signMessageHash;
declare const validations_validateCastAddBody: typeof validateCastAddBody;
declare const validations_validateCastId: typeof validateCastId;
declare const validations_validateCastRemoveBody: typeof validateCastRemoveBody;
declare const validations_validateEd25519PublicKey: typeof validateEd25519PublicKey;
declare const validations_validateEmbed: typeof validateEmbed;
declare const validations_validateEnsName: typeof validateEnsName;
declare const validations_validateEthAddress: typeof validateEthAddress;
declare const validations_validateEthBlockHash: typeof validateEthBlockHash;
declare const validations_validateLinkBody: typeof validateLinkBody;
declare const validations_validateLinkType: typeof validateLinkType;
declare const validations_validateMessage: typeof validateMessage;
declare const validations_validateMessageData: typeof validateMessageData;
declare const validations_validateMessageHash: typeof validateMessageHash;
declare const validations_validateMessageType: typeof validateMessageType;
declare const validations_validateNetwork: typeof validateNetwork;
declare const validations_validateParent: typeof validateParent;
declare const validations_validateQid: typeof validateQid;
declare const validations_validateQname: typeof validateQname;
declare const validations_validateReactionBody: typeof validateReactionBody;
declare const validations_validateReactionType: typeof validateReactionType;
declare const validations_validateTarget: typeof validateTarget;
declare const validations_validateUrl: typeof validateUrl;
declare const validations_validateUserDataAddBody: typeof validateUserDataAddBody;
declare const validations_validateUserDataType: typeof validateUserDataType;
declare const validations_validateUsernameProofBody: typeof validateUsernameProofBody;
declare const validations_validateVerificationAddEthAddressBody: typeof validateVerificationAddEthAddressBody;
declare const validations_validateVerificationAddEthAddressSignature: typeof validateVerificationAddEthAddressSignature;
declare const validations_validateVerificationRemoveBody: typeof validateVerificationRemoveBody;
declare const validations_verifySignedMessageHash: typeof verifySignedMessageHash;
declare namespace validations {
  export {
    validations_ALLOWED_CLOCK_SKEW_SECONDS as ALLOWED_CLOCK_SKEW_SECONDS,
    validations_EMBEDS_V1_CUTOFF as EMBEDS_V1_CUTOFF,
    validations_HEX_REGEX as HEX_REGEX,
    validations_QNAME_REGEX as QNAME_REGEX,
    validations_USERNAME_MAX_LENGTH as USERNAME_MAX_LENGTH,
    validations_ValidationMethods as ValidationMethods,
    validations_createMessageHash as createMessageHash,
    validations_signMessageHash as signMessageHash,
    validations_validateCastAddBody as validateCastAddBody,
    validations_validateCastId as validateCastId,
    validations_validateCastRemoveBody as validateCastRemoveBody,
    validations_validateEd25519PublicKey as validateEd25519PublicKey,
    validations_validateEmbed as validateEmbed,
    validations_validateEnsName as validateEnsName,
    validations_validateEthAddress as validateEthAddress,
    validations_validateEthBlockHash as validateEthBlockHash,
    validations_validateLinkBody as validateLinkBody,
    validations_validateLinkType as validateLinkType,
    validations_validateMessage as validateMessage,
    validations_validateMessageData as validateMessageData,
    validations_validateMessageHash as validateMessageHash,
    validations_validateMessageType as validateMessageType,
    validations_validateNetwork as validateNetwork,
    validations_validateParent as validateParent,
    validations_validateQid as validateQid,
    validations_validateQname as validateQname,
    validations_validateReactionBody as validateReactionBody,
    validations_validateReactionType as validateReactionType,
    validations_validateTarget as validateTarget,
    validations_validateUrl as validateUrl,
    validations_validateUserDataAddBody as validateUserDataAddBody,
    validations_validateUserDataType as validateUserDataType,
    validations_validateUsernameProofBody as validateUsernameProofBody,
    validations_validateVerificationAddEthAddressBody as validateVerificationAddEthAddressBody,
    validations_validateVerificationAddEthAddressSignature as validateVerificationAddEthAddressSignature,
    validations_validateVerificationRemoveBody as validateVerificationRemoveBody,
    validations_verifySignedMessageHash as verifySignedMessageHash,
  };
}

declare const getStoreLimits: (units: number) => {
    storeType: StoreType;
    limit: number;
}[];
declare const getDefaultStoreLimit: (storeType: StoreType) => 5 | 50 | 25 | 5000 | 2500;

export { AckMessageBody, CastAddBody, CastAddData, CastAddMessage, CastId, CastRemoveBody, CastRemoveData, CastRemoveMessage, CastsByParentRequest, ContactInfoContent, ContactInfoContentBody, DbStats, DbTrieNode, Ed25519Signer, Eip712Signer, Embed, Empty, EthersEip712Signer, EthersV5Eip712Signer, EventRequest, Factories, GossipAddressInfo, GossipMessage, GossipVersion, HashScheme, HubAsyncResult, HubError, HubErrorCode, HubEvent, HubEventType, HubInfoRequest, HubInfoResponse, HubResult, HubState, IdRegisterEventBody, IdRegisterEventType, IdRegisterOnChainEvent, IdRegistryEventByAddressRequest, LinkAddData, LinkAddMessage, LinkBody, LinkRemoveData, LinkRemoveMessage, LinkRequest, LinksByQidRequest, LinksByTargetRequest, MergeMessageBody, MergeMessageHubEvent, MergeOnChainEventBody, MergeOnChainEventHubEvent, MergeUserNameProofBody, MergeUsernameProofHubEvent, Message, MessageData, MessageType, MessagesResponse, MinimalEthersSigner, NameRegistryEventRequest, NetworkLatencyMessage, NobleEd25519Signer, OPENREALM_EPOCH, OnChainEvent, OnChainEventRequest, OnChainEventResponse, OnChainEventType, OpenrealmNetwork, PingMessageBody, PruneMessageBody, PruneMessageHubEvent, QidRequest, QidsRequest, QidsResponse, ReactionAddData, ReactionAddMessage, ReactionBody, ReactionRemoveData, ReactionRemoveMessage, ReactionRequest, ReactionType, ReactionsByQidRequest, ReactionsByTargetRequest, RentRegistryEventsRequest, RevokeMessageBody, RevokeMessageHubEvent, RevokeMessagesBySignerJobPayload, SignatureScheme, Signer, SignerEventBody, SignerEventType, SignerMigratedEventBody, SignerMigratedOnChainEvent, SignerOnChainEvent, SignerRequest, StorageLimit, StorageLimitsResponse, StorageRentEventBody, StorageRentOnChainEvent, StoreType, SubscribeRequest, SyncIds, SyncStatus, SyncStatusRequest, SyncStatusResponse, TrieNodeMetadataResponse, TrieNodePrefix, TrieNodeSnapshotResponse, TypedDataSigner, UpdateNameRegistryEventExpiryJobPayload, UserDataAddData, UserDataAddMessage, UserDataBody, UserDataRequest, UserDataType, UserNameProof, UserNameProofClaim, UserNameType, UsernameProofData, UsernameProofMessage, UsernameProofRequest, UsernameProofsResponse, VerificationAddEthAddressBody, VerificationAddEthAddressData, VerificationAddEthAddressMessage, VerificationEthAddressClaim, VerificationRemoveBody, VerificationRemoveData, VerificationRemoveMessage, VerificationRequest, ViemLocalEip712Signer, bigIntToBytes, bytesCompare, bytesDecrement, bytesIncrement, bytesStartsWith, bytesToBigInt, bytesToHexString, bytesToUtf8String, chains, clients, ed25519, eip712, extractEventTimestamp, fromOpenrealmTime, getDefaultStoreLimit, getOpenrealmTime, getStoreLimits, gossipVersionFromJSON, gossipVersionToJSON, hashSchemeFromJSON, hashSchemeToJSON, hexStringToBytes, hubEventTypeFromJSON, hubEventTypeToJSON, idRegisterEventTypeFromJSON, idRegisterEventTypeToJSON, isCastAddData, isCastAddMessage, isCastRemoveData, isCastRemoveMessage, isHubError, isIdRegisterOnChainEvent, isLinkAddData, isLinkAddMessage, isLinkRemoveData, isLinkRemoveMessage, isMergeMessageHubEvent, isMergeOnChainHubEvent, isMergeUsernameProofHubEvent, isPruneMessageHubEvent, isReactionAddData, isReactionAddMessage, isReactionRemoveData, isReactionRemoveMessage, isRevokeMessageHubEvent, isSignerMigratedOnChainEvent, isSignerOnChainEvent, isStorageRentOnChainEvent, isUserDataAddData, isUserDataAddMessage, isUsernameProofData, isUsernameProofMessage, isVerificationAddEthAddressData, isVerificationAddEthAddressMessage, isVerificationRemoveData, isVerificationRemoveMessage, makeCastAdd, makeCastAddData, makeCastRemove, makeCastRemoveData, makeLinkAdd, makeLinkAddData, makeLinkRemove, makeLinkRemoveData, makeMessageHash, makeMessageWithSignature, makeReactionAdd, makeReactionAddData, makeReactionRemove, makeReactionRemoveData, makeUserDataAdd, makeUserDataAddData, makeUserNameProofClaim, makeUsernameProof, makeUsernameProofData, makeVerificationAddEthAddress, makeVerificationAddEthAddressData, makeVerificationEthAddressClaim, makeVerificationRemove, makeVerificationRemoveData, messageTypeFromJSON, messageTypeToJSON, onChainEventTypeFromJSON, onChainEventTypeToJSON, openrealmNetworkFromJSON, openrealmNetworkToJSON, reactionTypeFromJSON, reactionTypeToJSON, signatureSchemeFromJSON, signatureSchemeToJSON, signerEventTypeFromJSON, signerEventTypeToJSON, storeTypeFromJSON, storeTypeToJSON, toOpenrealmTime, userDataTypeFromJSON, userDataTypeToJSON, userNameTypeFromJSON, userNameTypeToJSON, utf8StringToBytes, validations };
