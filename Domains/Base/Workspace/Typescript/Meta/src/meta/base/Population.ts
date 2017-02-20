import { Data } from "./Data";
import { ObjectType, Kind } from "./ObjectType";
import { RoleType } from "./RoleType";
import { MethodType } from "./MethodType";

export class Population {
    readonly domains: string[] = [];

    readonly objectTypeByName: { [email: string]: ObjectType; } = {};

    baseInit(this: Population, data: Data) {

        // Domains
        data.domains.forEach(dataDomain => {
            if (this.domains.indexOf(dataDomain) > -1) {
                this.domains.push(dataDomain);
            }
        });

        // Units
        ["Binary", "Boolean", "DateTime", "Decimal", "Float", "Integer", "String", "Unique"]
        .forEach((name) => {
            let metaUnit = new ObjectType();
            metaUnit.name = name;
            metaUnit.kind = Kind.unit;
            this.objectTypeByName[metaUnit.name] = metaUnit;
        });

        // Composites
        data.classes.forEach(dataClass => {
            let metaClass = new ObjectType();
            metaClass.name = dataClass.name;
            metaClass.kind = Kind.class;
            this.objectTypeByName[metaClass.name] = metaClass;

            dataClass.interfaces.forEach(dataInterface => {
                let metaInterface = this.objectTypeByName[dataInterface];
                if (!metaInterface) {
                    metaInterface = new ObjectType();
                    metaInterface.name = dataInterface;
                    metaInterface.kind = Kind.interface;
                    this.objectTypeByName[dataInterface] = metaInterface;
                }

                metaClass.interfaceByName[metaInterface.name] = metaInterface;
            });

            dataClass.roleTypes.forEach(dataRoleType => {
                let objectType = this.objectTypeByName[dataRoleType.objectType];
                let metaRoleType = new RoleType();
                metaRoleType.name = dataRoleType.name;
                metaRoleType.objectType = objectType;
                metaRoleType.isOne = dataRoleType.isOne;
                metaRoleType.isRequired = dataRoleType.isRequired;
                metaClass.roleTypeByName[metaRoleType.name] = metaRoleType;
            });

            dataClass.methodTypes.forEach(dataMethodType => {
                let metaMethodType: MethodType = { name: dataMethodType.name };
                metaClass.methodTypeByName[metaMethodType.name] = metaMethodType;
            });
        });

};
}